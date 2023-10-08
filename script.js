const library = new Map();
let bookShelf = document.querySelector('#bookshelf')
let newBookButton = document.querySelector('.new-book-button')
let dialog = document.querySelector('dialog');
let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');
let pagesInput = document.querySelector('#pages');
let readInput = document.querySelector('#read');
let addButton = document.querySelector('#add');
let cancelButton = document.querySelector('#cancel');
let form = document.querySelector('form')
let counter = 0;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = counter++;
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

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    library.delete(this.id);
    displayBooks();
  });
  card.appendChild(deleteButton);

  let readButton = document.createElement('button');
  readButton.textContent = this.read ? 'Unread': 'Read';
  readButton.addEventListener('click', () => {
    this.read = !this.read;
    displayBooks();
  });
  card.appendChild(readButton);

  bookShelf.appendChild(card);
}

function addBookToLibrary(title, author, pages, read) {
  let b = new Book(title, author, pages, read)
  library.set(b.id, b);
  b.display()
}

function displayBooks() {
  const newbookShelf = document.createElement('div');
  newbookShelf.setAttribute('id', 'bookshelf');
  bookShelf.replaceWith(newbookShelf);
  bookShelf = document.querySelector('#bookshelf');
  for (const [id, book] of library) {
    book.display()
  }
}

function openDialog() {
  dialog.show()
}

function cancelDialog(event) {
  event.preventDefault()
  cleanDialog()
  dialog.close();
}

function addBook() {
  addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
  cleanDialog();
}

function cleanDialog() {
  titleInput.value = ''
  authorInput.value = ''
  pagesInput.value = '';
  readInput.checked = false;
}

form.addEventListener("submit", addBook);
cancelButton.addEventListener('click', cancelDialog);
newBookButton.addEventListener('click', openDialog);

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('The Hobbit 1', 'J.R.R. Tolkien', 234, true);
addBookToLibrary('The Hobbit 2', 'J.R.R. Tolkien', 456, false);
addBookToLibrary('The Hobbit 3', 'J.R.R. Tolkien', 423, false);