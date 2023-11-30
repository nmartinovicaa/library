const myLibrary = []

function Book(title,author,pages,read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}


const book1 = new Book('The Martian','Andy Weir',500,true);
addBookToLibrary(book1)
const book2 = new Book('Shadow Divers','Robert Kurson',600,true)
addBookToLibrary(book2)
const book3 = new Book('Recursion','Blake Crouch',400,true)
addBookToLibrary(book3)
const book4 = new Book('The Splendid and the Vile','Erik Larson',550,false)
addBookToLibrary(book4)
