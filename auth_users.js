const express = require('express');
const router = express.Router();
let books = require('./booksdb.js');

// This array will store registered users. In a real app, use a database.
let users = [];

// Helper function to check if a user is valid
const isValid = (username) => {
  // Returns true if username is not empty or null
  return username && username.length > 0;
}

// Helper function to check if username and password match a registered user
const authenticatedUser = (username, password) => {
  // Find a user with matching username and password
  let validuser = users.find((user) => {
    return (user.username === username && user.password === password);
  });
  // Return true if user is found, false otherwise
  return !!validuser;
}

// Task 6: Register a new user
router.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required." });
  }

  if (!isValid(username)) {
    return res.status(400).json({ message: "Invalid username." });
  }

  // Check if user already exists
  const doesExist = users.find(user => user.username === username);
  if (doesExist) {
    return res.status(409).json({ message: "Username already exists." });
  }

  // Register new user
  users.push({ "username": username, "password": password });
  return res.status(201).json({ message: "User successfully registered. You can now login." });
});

// Task 7: Login as a registered user
router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required." });
  }

  if (authenticatedUser(username, password)) {
    // Store username in session
    req.session.username = username;
    return res.status(200).json({ message: "User successfully logged in." });
  } else {
    return res.status(401).json({ message: "Invalid login. Check username and password." });
  }
});

// Task 8: Add or modify a book review
router.put('/auth/review/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  const reviewText = req.query.review; // Get review from query parameter
  const username = req.session.username; // Get username from session

  if (!username) {
    return res.status(401).json({ message: "User not logged in." });
  }

  if (!books[isbn]) {
    return res.status(404).json({ message: "Book not found." });
  }

  if (!reviewText) {
    return res.status(400).json({ message: "Review text is required." });
  }

  // Add or update the review
  // We use the username as the key for the review
  books[isbn].reviews[username] = reviewText;

  res.status(200).json({ 
    message: "Review successfully added/updated.",
    reviews: books[isbn].reviews 
  });
});

// Task 9: Delete a book review
router.delete('/auth/review/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  const username = req.session.username; // Get username from session

  if (!username) {
    return res.status(401).json({ message: "User not logged in." });
  }

  if (!books[isbn]) {
    return res.status(404).json({ message: "Book not found." });
  }

  // Check if a review by this user exists
  if (books[isbn].reviews[username]) {
    delete books[isbn].reviews[username];
    res.status(200).json({ 
      message: "Review successfully deleted.",
      reviews: books[isbn].reviews
    });
  } else {
    // If no review by this user is found
    res.status(404).json({ message: "No review found for this user on this book." });
  }
});

module.exports.authenticated = router;
module.exports.users = users;