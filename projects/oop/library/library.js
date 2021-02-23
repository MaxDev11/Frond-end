// Global Variables

const d = document;
const ls = localStorage;

// Classes

// Book
class Book {
    constructor(title, author, type, isbn) {
       this.title = title;
       this.author = author;
       this.type = type; 
       this.isbn = isbn;
    }
}

// UI
class UI {
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach((book) => UI.addBook(book));
    }

    static addBook(book) {
        const list = d.querySelector('#list');
        const row = d.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
            <td>${book.isbn}</td>
            <td><button class="btn-sm delete">X</button></td>
        `;

        list.appendChild(row);
    }

    static removeBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(msg, className) {
        const div = d.createElement('div');
        div.style.fontSize = '1.4rem';
        div.className = `alert alert-${className}`;
        div.appendChild(d.createTextNode(msg));
        const main = d.querySelector('.main'),
              form = d.querySelector('#form');

        main.insertBefore(div, form);

        setTimeout(() => d.querySelector('.alert').remove(), 4000);
    }

    static clearFields() {
        d.querySelector('#title').value = "";
        d.querySelector('#author').value = "";
        d.querySelector('#isbn').value = "";
    }
}

// Store
class Store {
    static getBooks() {
        let books;
        ls.getItem('books') === null ? 
            books = [] : 
            books = JSON.parse(ls.getItem('books'));

        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        ls.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        ls.setItem('books', JSON.stringify(books));
    }
}

// Event Listeners

// Load content
d.addEventListener('DOMContentLoaded', UI.displayBooks);

// Add Book
d.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = d.querySelector('#title').value,
          author = d.querySelector('#author').value,
          type = d.querySelector('#type').value,
          isbn = d.querySelector('#isbn').value;

    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('FILL THE FUCKING FIELDS!!!', 'danger');
    } else {
        const book = new Book(title, author, type, isbn);

        UI.addBook(book);
        Store.addBook(book);
        UI.clearFields();
        UI.showAlert('YEAH, THAS IT!!!', 'success');
    }
});

// Remove book
d.querySelector('#list').addEventListener('click', (e) => {
    UI.removeBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    UI.showAlert('Book removed, are u happy now?', 'success');
});