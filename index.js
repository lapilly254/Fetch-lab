function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  // fetch("https://anapioficeandfire.com/api/books")
  // .then((resp) => resp.json())
  // .then((json) => console.log(json));
  return fetch(fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => console.log(json))
)}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
