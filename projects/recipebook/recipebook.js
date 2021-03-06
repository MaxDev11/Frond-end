// const select = (s) => document.querySelector(s),
//     ls = localStorage;

// const title = select('#title'),
//     description = select('#description'),
//     prevImg = select('#prevImg'),
//     choose = select('#choose'),
//     add = select('#add'),
//     del = select('#delete'),
//     main = select('.main'),
//     form = select('.form');

// let image;

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     addRecipe();
//     clearFields();
// });

// choose.addEventListener('change', function () {
//     image = this.files[0];

//     if (image) {
//         const reader = new FileReader();

//         reader.addEventListener('load', function () {
//             prevImg.setAttribute('src', this.result);
//         });

//         reader.readAsDataURL(image);
//     }
// });

// function addRecipe() {
//     main.innerHTML += `
//         <details class="mb-10" id="details">
//             <summary class="text-xl lg:text-2xl 2xl:text-3xl font-bold mt-4">
//                 ${title.value}
//             </summary>
//             <div class="md:flex flex-row justify-between">
//                 <p
//                     class="md:flex md:flex-col md:justify-center md:w-1/2 text-xl lg:text-2xl 2xl:text-3xl text-center mt-5">
//                     ${description.value}
//                 </p>
//                 <p class="flex justify-center md:w-1/2 md:flex-col lg:items-center pt-5 pl-5 pr-5"><img
//                     width="400" alt="recipeImage" id="image"></p>
//             </div>
//             <div class="text-center">
//                 <button class="text-xl 2xl:text-2xl underline hover:opacity-80 mt-16" id="delete">Delete</button>
//             </div>
//         </details>
//     `;
//     const reader2 = new FileReader();

//     reader2.addEventListener('load', function () {
//         select('#image').setAttribute('src', this.result);
//     });

//     reader2.readAsDataURL(image);
// }

// del.addEventListener('click', function (e) {

// });

// function clearFields() {
//     title.value = "";
//     description.value = "";
//     prevImg.setAttribute('src', '');
// }
