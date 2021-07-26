console.log('Happy js :)');
// Define UI
let form = document.querySelector('#add_book');
let bookList = document.querySelector('#book_list')

// Book Class
class Book {
    constructor(book, author, isbn) {
        this.name = book;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI class
class UI {
    static addToBookList(book) {
        let bookList = document.querySelector('#book_list');
        let row = document.createElement('tr');
        row.innerHTML =
            `<td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>`;
        bookList.appendChild(row);
        console.log('New Book Added to list :)');
    }

    static clearFields() {
        document.getElementById('name').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    static showAlert(message, className) {
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(`${message}`));
        let container = document.querySelector('.container');
        let form = document.querySelector('#add_book');
        container.insertBefore(div, form);
        setTimeout(() => {
            div.remove();
        }, 2000);
    }

    static removeItem(item) {
        if (item.hasAttribute('href')) {
            item.parentElement.parentElement.remove();
            UI.showAlert('Book removed', 'success');
            Store.removeBook(item);
        }
    }
}

// class LocalStorage
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book) {
        let books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static showBook() {
        let books = Store.getBooks();
        books.forEach(book => {
            UI.addToBookList(book);
        })
    }

    static removeBook(book) {
        let books = Store.getBooks();
        books.forEach((item) => {
            if (book.parentElement.previousElementSibling.textContent === item.isbn) {
                console.log(`UI=> ${book.parentElement.previousElementSibling.textContent} LS=> ${item.isbn}`);
                books.splice('index', 1)
            }

        });
        localStorage.setItem('books', JSON.stringify(books));
    }

}

// Add Event Listener
form.addEventListener('submit', addNewBook);
bookList.addEventListener('click', removeFromList);
document.addEventListener('DOMContentLoaded', Store.showBook());

// Define Functions
function addNewBook(e) {
    e.preventDefault();
    let book_name = document.getElementById('name').value,
        author_name = document.getElementById('author').value,
        isbn_name = document.getElementById('isbn').value;

    if (book_name === '' || author_name === '' || isbn_name === '') {
        // alert('No data !');
        UI.showAlert('Empty fields! please insert data', 'error');
    } else {
        let book = new Book(book_name, author_name, isbn_name);

        UI.addToBookList(book);
        UI.showAlert('Book Added to list', 'success');
        UI.clearFields();
        Store.addBook(book);
    }

}

// Remove From list function
function removeFromList(e) {
    e.preventDefault();
    UI.removeItem(e.target);
}