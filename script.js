const library = [];
let bookShelf = document.querySelector('.bookshelf')

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function() {
  let readMessage = this.read ? 'already read' : 'not read yet';
  return `${this.title} by ${this.author}, ${this.pages} pages, ${readMessage}`;
}

function addBookToLibrary(title, author, pages, read) {
  let b = new Book(title, author, pages, read)
  library.push(b);
}

function displayBooks() {
  for (const book of library) {
    let card = document.createElement('div');
    card.setAttribute('class', 'card')

    let title = document.createElement('div');
    title.setAttribute('class', 'title');
    title.textContent = `Tittle: ${book.title}`;
    card.appendChild(title);

    let author = document.createElement('div');
    author.setAttribute('class', 'author');
    author.textContent = `Author: ${book.author}`;
    card.appendChild(author);

    let pages = document.createElement('div');
    pages.setAttribute('class', 'pages');
    pages.textContent = `Pages: ${book.pages}`;
    card.appendChild(pages);

    let read = document.createElement('div');
    read.setAttribute('class', 'read');
    read.textContent = book.read ? 'already read' : 'not read yet';
    card.appendChild(read);

    bookShelf.appendChild(card);
  }
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('The Hobbit 1', 'J.R.R. Tolkien', 234, true);
addBookToLibrary('The Hobbit 2', 'J.R.R. Tolkien', 456, false);
addBookToLibrary('The Hobbit 3', 'J.R.R. Tolkien', 423, false);
displayBooks()