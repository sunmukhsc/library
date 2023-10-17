const myLibrary = [];

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true)
const theFellowship = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 423, false)
const theTwoTowers = new Book("The Two Towers", "J.R.R. Tolkien", 352, false)
const theReturn = new Book("The Return of the King", "J.R.R. Tolkien", 416, false)

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
  myLibrary.push(book);
}

function displayLibrary() {
    for (book of myLibrary) {
        console.log(book);
    }
}

addBookToLibrary(theHobbit);
addBookToLibrary(theFellowship);
addBookToLibrary(theTwoTowers);
addBookToLibrary(theReturn);

displayLibrary();