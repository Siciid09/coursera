const express = require('express');
const router = express.Router();
let books = require('./booksdb.js'); // Import the book data

// Task 1: Get the list of books available in the shop
router.get('/', (req, res) => {
  // Send the 'books' object as a JSON response, nicely formatted
  res.status(200).json(books);
});

// Task 2: Get book details based on ISBN
router.get('/isbn/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  if (books[isbn]) {
    res.status(200).json(books[isbn]);
  } else {
    res.status(404).json({ message: "Book not found for ISBN: " + isbn });
  }
});

// Task 3: Get book details based on author
router.get('/author/:author', (req, res) => {
  const authorName = req.params.author.toLowerCase();
  let foundBooks = [];

  // Iterate over the keys of the books object
  Object.keys(books).forEach(isbn => {
    if (books[isbn].author.toLowerCase() === authorName) {
      // Add ISBN to the book object before pushing
      foundBooks.push({
        isbn: isbn,
        title: books[isbn].title,
        reviews: books[isbn].reviews
      });
    }
  });

  if (foundBooks.length > 0) {
    res.status(200).json({ booksbyauthor: foundBooks });
  } else {
    res.status(404).json({ message: "No books found for author: " + req.params.author });
  }
});

// Task 4: Get book details based on title
router.get('/title/:title', (req, res) => {
  const titleName = req.params.title.toLowerCase();
  let foundBooks = [];

  // Iterate over the keys of the books object
  Object.keys(books).forEach(isbn => {
    if (books[isbn].title.toLowerCase() === titleName) {
      // Add ISBN and author to the book object before pushing
      foundBooks.push({
        isbn: isbn,
        author: books[isbn].author,
        reviews: books[isbn].reviews
      });
    }
  });

  if (foundBooks.length > 0) {
    res.status(200).json({ booksbytitle: foundBooks });
  } else {
    res.status(404).json({ message: "No books found for title: " + req.params.title });
  }
});

// Task 5: Get book reviews based on ISBN
router.get('/review/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  if (books[isbn] && books[isbn].reviews) {
    res.status(200).json(books[isbn].reviews);
  } else if (books[isbn]) {
    res.status(200).json({ message: "No reviews found for this book." });
  } else {
    res.status(404).json({ message: "Book not found for ISBN: " + isbn });
  }
});

module.exports = router;