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
        bookElem = createBookHTML(myLibrary[i]);
        divBooks.appendChild(bookElem);
    }
}

function createBookHTML(book) {
    let bookElem = document.createElement('div');
    bookElem.classList.add("book");
    let title = document.createElement('h2');
    title.classList.add("title");
    title.textContent = book.title;
    let author = document.createElement('p');
    author.textContent = book.authorFirst + ' ' + book.authorLast;
    /* let numPages = document.createElement('p')
    let read = document.createElement('p'); */
    bookElem.append(title, author);
    return bookElem;
}

function toggleReadStatus() {
}



testBook1 = new Book("The Phantom Tollbooth", "Norton", "Juster", 255, true);
testBook2 = new Book("Holes", "Louis", "Sachar", 272, true);
testBook3 = new Book("Bridge to Terabithia", "Katherine", "Paterson", 208, true);
testBook4 = new Book("The Catcher in the Rye", "J.D.", "Salinger", 234, false);

myLibrary.push(testBook1, testBook2, testBook3, testBook4);
displayLibrary();
