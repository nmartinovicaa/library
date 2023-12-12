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

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".add-book-button");
const closeButton = document.querySelector(".close");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});



const modalSubmit = document.querySelector('.form-submit')
modalSubmit.addEventListener('submit', (event) => {

  const data = new FormData(event.target);
  let bookObject = (Object.fromEntries(data.entries()))
  addBookToLibrary(new Book(bookObject.title, bookObject.author,bookObject.pages,bookObject.read))
  addBooksToPage()
  dialog.close()
  document.getElementById("addBook").reset();
  return event.preventDefault()
})

function addBooksToPage() {
  const books = document.querySelector('.books')
  removeAllChildNodes(books)
  for (let i = 0; i < myLibrary.length; i++)
  {
    const bookDiv = createBookDiv(myLibrary[i]);
    if (i % 2 === 0) {
      bookDiv.classList.add('book-even')
    } else {
      bookDiv.classList.add('book-odd')
    }
    bookDiv.dataset.id = i;
    books.appendChild(bookDiv)
  }
}

function deleteBook(event) {
  let bookToDelete = event.target.parentElement.dataset.id;
  myLibrary.splice(bookToDelete,1)
  addBooksToPage()
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function createBookDiv(book) {
  const bookDiv = document.createElement('div');
  const bookDetails = document.createElement('div')
  const minus = document.createElement('div')
  bookDiv.classList.add('book')
  bookDetails.classList.add('book-details')
  minus.classList.add('minus')
  bookDiv.appendChild(bookDetails)
  bookDiv.appendChild(minus)
  bookDetails.appendChild(document.createElement('h2'))
  bookDetails.appendChild(document.createElement('h4'))
  bookDetails.appendChild(document.createElement('h5'))
  bookDetails.appendChild(document.createElement('h5'))
  bookDetails.querySelector(':nth-child(1)').textContent = book.title
  bookDetails.querySelector(':nth-child(2)').textContent = book.author
  bookDetails.querySelector(':nth-child(3)').textContent = book.pages
  bookDetails.querySelector(':nth-child(4)').textContent = `Read: ${book.read}`
  minus.textContent = '-'
  minus.addEventListener('click', deleteBook)
  return bookDiv


}
