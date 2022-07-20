let myLibrary = [];
let bookId = 0;

function Book (title, authorFirst, authorLast, numPages, read) {
    this.id = bookId++;
    this.title = title;
    this.authorFirst = authorFirst;
    this.authorLast = authorLast;
    this.numPages = numPages;
    this.read = read;
    Book.prototype.getReadSent = function(read) {
        switch(read) {
        case false:
            return 'not read yet';
        case true:
            return 'read already';
        }
    };
    this.readSent = this.getReadSent(read);
    this.info = (`${this.title} by ${this.authorFirst} ${this.authorLast}, ${this.numPages} pages, ${this.readSent}`);
}

// takes in a Book object and pushes onto myLibrary array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

// needs to remove it from the array *and* DOM
function removeBookFromLibrary(bookDiv) {
    let bookId = bookDiv.id.charAt((bookDiv.id.length) - 1); // book-*1*
    bookId = Number(bookId);
    bookDiv.remove();
    const delBookIdx = myLibrary.findIndex(book => book.id === bookId);
    myLibrary.splice(delBookIdx, 1);
}

// iterates over myLibrary array and creates a div per book
// appends the div to the parent 'books' div
function displayLibrary() {
    for (i = 0; i < myLibrary.length; i++) {
        displayBook(myLibrary[i]);
    }
}

function displayBook(book) {
    let divBooks = document.getElementById('books');
    bookDiv = createBookDiv(book);
    divBooks.appendChild(bookDiv);
}

// Returns a single div with Book attributes as children
function createBookDiv(book) {
    let bookDiv = createDivElement('div', "book");
    let bookID = "book-" + book.id;
    bookDiv.setAttribute("id", bookID);
    let deleteButton = createDivElement('button', "delete");
    deleteButton.textContent = "Delete";
    let titleElem = createDivElement('h2', "title", book.title);
    let authorElem = createDivElement('p', "author", (book.authorFirst + ' ' + book.authorLast));
    let numPagesElem = createDivElement('p', "num-pages", String(book.numPages));
    let readElem = createDivElement('p', "read", String(book.read));
    bookDiv.append(deleteButton, titleElem, authorElem, numPagesElem, readElem);
    return bookDiv;
  }

// creates an individual div element from a Book object property
// Used in createBookDiv to compose a complete Book div from a single Book object.
function createDivElement(elementType, className, text) {
    let elem = document.createElement(elementType);
    elem.classList.add(className);
    if (text) {
        elem.textContent = text;
    }
    return elem;
}

// takes in a Book obj and changes the book status
function toggleReadStatus(book) {
    if (book.read == true) {
        book.read = false;
    } else {
        book.read = true;
    }
}

// adds an event listener to "Delete" buttons on each book
function setUpDeleteListener() {
    const deleteBookButtons = document.querySelectorAll("#books .delete");
    deleteBookButtons.forEach((button) => {
        button.addEventListener('click', () => {
            parentBookDiv = button.parentNode;
            removeBookFromLibrary(parentBookDiv);
        });
    });
}

// adds an event listener to the "Add Book" button
// to reveal the book info form
function showAddBookForm() {
    const addBookButton = document.querySelector("#add-book");
    const bookInfoForm = document.querySelector("#book-info");
    addBookButton.addEventListener('click', () => {
        bookInfoForm.style.display = 'block';
    });
}

// adds an event listener to the "Add To Library" button
// to process the form and add a new book to the library
function setUpAddToLibraryListener() {
    const addToLibButton = document.querySelector("#add-to-library");
    addToLibButton.addEventListener('click', () => {
        // validate user input
        // if user input is good add to library
        // if not correct input
        newBook = processBookForm();
        addBookToLibrary(newBook);
        // hide the form;
        displayBook(newBook);
    });
}

// takes user input from book form and returns new Book obj
function processBookForm() {
    const bookTitle = document.querySelector("#book-info #book-title");
    const authorFirst = document.querySelector("#book-info #author-first");
    const authorLast = document.querySelector("#book-info #author-last");
    const numPages = document.querySelector("#book-info #num-pages");
    const readStatus = document.querySelector("#book-info #read").checked;
    newBook = new Book(bookTitle.value, authorFirst.value, authorLast.value, numPages.value, readStatus);
    return newBook;
}

testBook1 = new Book("The Phantom Tollbooth", "Norton", "Juster", 255, true);
addBookToLibrary(testBook1);
testBook2 = new Book("Holes", "Louis", "Sachar", 272, true);
addBookToLibrary(testBook2);
testBook3 = new Book("Bridge to Terabithia", "Katherine", "Paterson", 208, true);
addBookToLibrary(testBook3);
testBook4 = new Book("The Catcher in the Rye", "J.D.", "Salinger", 234, false);
addBookToLibrary(testBook4);

displayLibrary();
showAddBookForm();
setUpDeleteListener();
setUpAddToLibraryListener();
