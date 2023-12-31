class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    if (this.read) {
      this.read = false;
    }
    else {
      this.read = true;
    }
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

        const readToggle = document.createElement('button');
        readToggle.className = 'read-toggle';
        readToggle.setAttribute('id', `toggle${index}`);
        readToggle.textContent = 'Toggle Read';

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';
        deleteBtn.setAttribute('id', `delete${index}`);
        deleteBtn.innerHTML = '<svg class="fill" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>';

        deleteBtn.addEventListener("click", () => {
          myLibrary.splice(index, 1);
          displayLibrary();
        });

        readToggle.addEventListener("click", () => {
          book.toggleRead();
          displayLibrary();
        });
        
        singleBook.appendChild(titleDiv);
        singleBook.appendChild(authorDiv);
        singleBook.appendChild(pagesDiv);
        singleBook.appendChild(readDiv);
        singleBook.appendChild(readToggle);
        singleBook.appendChild(deleteBtn);

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
    "The Hobbit", "J.R.R. Tolkien", 295, true);
const theFellowship = new Book(
    "The Fellowship of the Ring", "J.R.R. Tolkien", 423, false);
const theTwoTowers = new Book(
    "The Two Towers", "J.R.R. Tolkien", 352, false);
const theReturn = new Book(
    "The Return of the King", "J.R.R. Tolkien", 416, false);

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
  if (dialog.returnValue !== 'cancel') {
    const newTitle = titleInput.value;
    const newAuthor = authorInput.value;
    const newPages = pagesInput.value;
    const newRead = getReadBoolean();
    const newBook = new Book(newTitle, newAuthor, newPages, newRead);
    myLibrary.push(newBook);
    displayLibrary();
  }
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  confirmBtn.value = "default";
  dialog.close(confirmBtn.value);
});

dialog.addEventListener("cancel", (event) => {});

addBookToLibrary(theHobbit);
addBookToLibrary(theFellowship);
addBookToLibrary(theTwoTowers);
addBookToLibrary(theReturn);

displayLibrary();