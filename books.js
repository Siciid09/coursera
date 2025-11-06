const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const auth = require('../middleware/auth');

const dataPath = path.join(__dirname, '..', 'data', 'books.json');

function readBooks() {
  const raw = fs.readFileSync(dataPath);
  return JSON.parse(raw);
}

function writeBooks(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// Task 1: Get all books
router.get('/', (req, res) => {
  const books = readBooks();
  res.json(books);
});

// Task 2: Get by ISBN
router.get('/isbn/:isbn', (req, res) => {
  const books = readBooks();
  const book = books.find(b=>b.isbn === req.params.isbn);
  if (!book) return res.status(404).json({ message: 'Not found' });
  res.json(book);
});

// Task 3: Get by author
router.get('/author/:author', (req, res) => {
  const books = readBooks();
  const matches = books.filter(b => b.author.toLowerCase().includes(req.params.author.toLowerCase()));
  res.json(matches);
});

// Task 4: Get by title
router.get('/title/:title', (req, res) => {
  const books = readBooks();
  const matches = books.filter(b => b.title.toLowerCase().includes(req.params.title.toLowerCase()));
  res.json(matches);
});

// Task 5: Get book reviews
router.get('/:isbn/review', (req, res) => {
  const books = readBooks();
  const book = books.find(b => b.isbn === req.params.isbn);
  if (!book) return res.status(404).json({ message: 'Not found' });
  res.json(book.reviews || {});
});

// Task 8: Add/Modify a book review (registered user)
router.post('/:isbn/review', auth, (req, res) => {
  const username = req.user.username;
  const { review } = req.body;
  const books = readBooks();
  const book = books.find(b => b.isbn === req.params.isbn);
  if (!book) return res.status(404).json({ message: 'Not found' });
  book.reviews = book.reviews || {};
  book.reviews[username] = review;
  writeBooks(books);
  res.json({ message: 'Review added/modified', reviews: book.reviews });
});

// Task 9: Delete user's review
router.delete('/:isbn/review', auth, (req, res) => {
  const username = req.user.username;
  const books = readBooks();
  const book = books.find(b => b.isbn === req.params.isbn);
  if (!book) return res.status(404).json({ message: 'Not found' });
  if (book.reviews && book.reviews[username]) {
    delete book.reviews[username];
    writeBooks(books);
    return res.json({ message: 'Review deleted' });
  }
  res.status(404).json({ message: 'Review not found for user' });
});

module.exports = router;
