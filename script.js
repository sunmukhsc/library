const myLibrary = [];

const theHobbit = new Book(
    "The Hobbit", "J.R.R. Tolkien", 295, true)
const theFellowship = new Book(
    "The Fellowship of the Ring", "J.R.R. Tolkien", 423, false)
const theTwoTowers = new Book(
    "The Two Towers", "J.R.R. Tolkien", 352, false)
const theReturn = new Book(
    "The Return of the King", "J.R.R. Tolkien", 416, false)

const booksDiv = document.querySelector('.books');

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
    // for (book of myLibrary) {
        

    //     booksDiv.appendChild(titleDiv);
    //     console.log(book);
    // }
    myLibrary.forEach((book, index) => {
        const singleBook = document.createElement('div');
        singleBook.className = 'row';
        singleBook.setAttribute('id', `row${index+1}`);

        const titleDiv = document.createElement('div');
        titleDiv.className = 'title';
        titleDiv.textContent = book.title;

        const authorDiv = document.createElement('div');
        authorDiv.className = 'author';
        authorDiv.textContent = book.author;

        const pagesDiv = document.createElement('div');
        pagesDiv.className = 'pages';
        pagesDiv.textContent = book.pages;

        const readDiv = document.createElement('div');
        readDiv.className = 'read';
        readDiv.textContent = book.read ? 'Read' : 'Not Read';
        
        singleBook.appendChild(titleDiv);
        singleBook.appendChild(authorDiv);
        singleBook.appendChild(pagesDiv);
        singleBook.appendChild(readDiv);

        booksDiv.appendChild(singleBook);
    });
}

addBookToLibrary(theHobbit);
addBookToLibrary(theFellowship);
addBookToLibrary(theTwoTowers);
addBookToLibrary(theReturn);

displayLibrary();