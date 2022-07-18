let myLibrary = [];

function Book (title, authorFirst, authorLast, numPages, read) {
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

function removeBookFromLibrary(book) {
}

// iterates over myLibrary array and creates a div per book
// appends the div to the parent 'books' div
function displayLibrary() {
    let divBooks = document.getElementById('books');
    for (i = 0; i < myLibrary.length; i++) {
        bookDiv = createBookDiv(myLibrary[i]);
        divBooks.appendChild(bookDiv);
    }
}

// Returns a single div with Book attributes as children
function createBookDiv(book) {
    let bookDiv = createDivElement('div', "book");
    let titleElem = createDivElement('h2', "title", book.title);
    let authorElem = createDivElement('p', "author", (book.authorFirst + ' ' + book.authorLast));
    let numPagesElem = createDivElement('p', "numPages", String(book.numPages));
    let readElem = createDivElement('p', "read", String(book.read));
    bookDiv.append(titleElem, authorElem, numPagesElem, readElem);
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

function toggleReadStatus() {
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
        displayLibrary();
    }
}

// takes user input from book form and returns new Book obj
function processBookForm() {
    const bookTitle = document.querySelector("#book_info #book_title");
    const authorFirst = document.querySelector("#book_info #author_first");
    const authorLast = document.querySelector("#book_info #author_last");
    const numPages = document.querySelector("#book_info #num_pages");
    newBook = new Book(bookTitle.value, authorFirst.value, authorLast.value, numPages.value, true);
    return newBook;
}

testBook1 = new Book("The Phantom Tollbooth", "Norton", "Juster", 255, true);
testBook2 = new Book("Holes", "Louis", "Sachar", 272, true);
testBook3 = new Book("Bridge to Terabithia", "Katherine", "Paterson", 208, true);
testBook4 = new Book("The Catcher in the Rye", "J.D.", "Salinger", 234, false);

myLibrary.push(testBook1, testBook2, testBook3, testBook4);
displayLibrary();
showAddBookForm();
setUpAddToLibraryListener();
