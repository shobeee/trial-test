/* eslint class-methods-use-this: ["error", { "exceptMethods": ["changeContent", "update"] }] */
/* eslint-disable linebreak-style */
export default class Store {
    // store book to local storage
    static getBooks() {
      let books;
      if (localStorage.getItem('Books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('Books'));
      }
      return books;
    }
  // add book
    static addBook(book) {
      const books = Store.getBooks();
      books.push(book);
      localStorage.setItem('Books', JSON.stringify(books));
    }
  //remove book
    static removeBook(id) {
      let books = Store.getBooks();
      const updatedBooks = books.filter((book) => book.id !== parseInt(id, 10));
      books = updatedBooks;
      localStorage.setItem('Books', JSON.stringify(books));
    }
  }