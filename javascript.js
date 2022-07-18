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

// PSEUDOCODE:
// 1. construct new Book object with user input
// containing Book attributes (title, author etc.)
// 2. add it to myLibrary array
function addBookToLibrary() {
}

function removeBookFromLibrary() {
}

function displayLibrary() {
    let divBooks = document.getElementById('books');
    for (i = 0; i < myLibrary.length; i++) {
        bookDiv = createBookDiv(myLibrary[i]);
        divBooks.appendChild(bookDiv);
    }
}

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

function setButtonListeners() {
    const addBookButton = document.querySelector("#addBook");
    addBookButton.addEventListener('click', () => {
        /* set #book_info display to block */
    });
    /* add BL for submit button to run addBookToLibrary*/
}


testBook1 = new Book("The Phantom Tollbooth", "Norton", "Juster", 255, true);
testBook2 = new Book("Holes", "Louis", "Sachar", 272, true);
testBook3 = new Book("Bridge to Terabithia", "Katherine", "Paterson", 208, true);
testBook4 = new Book("The Catcher in the Rye", "J.D.", "Salinger", 234, false);

myLibrary.push(testBook1, testBook2, testBook3, testBook4);
displayLibrary();
