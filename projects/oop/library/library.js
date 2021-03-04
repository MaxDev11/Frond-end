
const select = (s) => document.querySelector(s);
const ls = localStorage;
const tt = '#title', a = '#author', t = "#type",
      i = '#isbn', l = '#list', f = '#form';

class Book {
    constructor(title, author, type, isbn) {
       this.title = title;
       this.author = author;
       this.type = type; 
       this.isbn = isbn;
    }
}

class UI {
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach((book) => UI.addBook(book));
    }

    static addBook(book) {
        const list = select(l);
        const row = document.createElement('tr');

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
        const div = document.createElement('div');
        div.style.fontSize = '1.4rem';
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(msg));
        const main = select('.main'),
              form = select(f);

        main.insertBefore(div, form);

        setTimeout(() => select('.alert').remove(), 4000);
    }

    static clearFields() {
        select(tt).value = "";
        select(a).value = "";
        select(i).value = "";
    }
}

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

document.addEventListener('DOMContentLoaded', UI.displayBooks);

select(f).addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = select(tt).value,
          author = select(a).value,
          type = select(t).value,
          isbn = select(i).value;

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
select(l).addEventListener('click', (e) => {
    UI.removeBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    UI.showAlert('Book removed, are u happy now?', 'success');
});