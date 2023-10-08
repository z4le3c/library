const library = [];
let bookShelf = document.querySelector('.bookshelf')
let newBookButton = document.querySelector('.new-book-button')
let dialog = document.querySelector('dialog');
let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');
let pagesInput = document.querySelector('#pages');
let readInput = document.querySelector('#read');
let addButton = document.querySelector('#add');
let cancelButton = document.querySelector('#cancel');
let form = document.querySelector('form')

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.display = function() {
  let card = document.createElement('div');
  card.setAttribute('class', 'card')

  let title = document.createElement('div');
  title.setAttribute('class', 'title');
  title.textContent = `Tittle: ${this.title}`;
  card.appendChild(title);

  let author = document.createElement('div');
  author.setAttribute('class', 'author');
  author.textContent = `Author: ${this.author}`;
  card.appendChild(author);

  let pages = document.createElement('div');
  pages.setAttribute('class', 'pages');
  pages.textContent = `Pages: ${this.pages}`;
  card.appendChild(pages);

  let read = document.createElement('div');
  read.setAttribute('class', 'read');
  read.textContent = this.read ? 'already read' : 'not read yet';
  card.appendChild(read);

  bookShelf.appendChild(card);
}

function addBookToLibrary(title, author, pages, read) {
  let b = new Book(title, author, pages, read)
  library.push(b);
  b.display()
}

function displayBooks() {
  for (const book of library) {
    book.display()
  }
}

function openDialog() {
  dialog.show()
}

function cleanDialog() {
  titleInput.value = ''
  authorInput.value = ''
  pagesInput.value = '';
  readInput.checked = false;
}

form.addEventListener("submit", () => {
  addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
  cleanDialog();
});

cancelButton.addEventListener('click', (event) => {
  event.preventDefault()
  cleanDialog()
  dialog.close();
});
newBookButton.addEventListener('click', openDialog);

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('The Hobbit 1', 'J.R.R. Tolkien', 234, true);
addBookToLibrary('The Hobbit 2', 'J.R.R. Tolkien', 456, false);
addBookToLibrary('The Hobbit 3', 'J.R.R. Tolkien', 423, false);