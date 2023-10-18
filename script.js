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
    const keepRow0 = document.querySelector('#row0');
    booksDiv.innerHTML= "";
    booksDiv.appendChild(keepRow0);
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

function getReadBoolean() {
  for(let i = 0; i < readInput.length; i++) {
    if (readInput[i].checked) {
      if (readInput[i].value === 'yes') {
        return true;
      } else if (readInput[i].value === 'no') {
        return false;
      } else {
        return null;
      }
    }
  }
}

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
const showButton = document.querySelector('.new-book');
const dialog = document.querySelector('#new-book-dialog');
const confirmBtn = dialog.querySelector('#confirmBtn');
const titleInput = dialog.querySelector('#new-title');
const authorInput = dialog.querySelector('#new-author');
const pagesInput = dialog.querySelector('#new-pages');
const readInput = document.getElementsByName('read');

// Show dialog when "+ New Book" button is clicked
showButton.addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener("close", (e) => {
  const newTitle = titleInput.value;
  const newAuthor = authorInput.value;
  const newPages = pagesInput.value;
  const newRead = getReadBoolean();
  const newBook = new Book(newTitle, newAuthor, newPages, newRead);
  myLibrary.push(newBook);
  displayLibrary();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
});

addBookToLibrary(theHobbit);
addBookToLibrary(theFellowship);
addBookToLibrary(theTwoTowers);
addBookToLibrary(theReturn);

displayLibrary();