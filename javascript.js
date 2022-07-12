let myLibrary = [];

function Book (title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    Book.prototype.getReadSent = function() {
        let readSent = "";
        switch(readSent) {
        case false:
            readSent = 'not read yet';
            break;
        case true:
            readSent = 'read already';
            break;
        }
    };
    this.info = (`${title} by ${author}, ${numPages} pages, ${readSent}`);
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
}

function toggleReadStatus() {
}
