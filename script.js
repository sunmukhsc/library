const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return read ? `${title} by ${author}, ${pages} pages, read` 
    : `${title} by ${author}, ${pages} pages, not read yet`;
  }
}

function addBookToLibrary(book) {
  // do stuff here
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)