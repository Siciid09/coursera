const express = require('express');
const session = require('express-session');
const generalRoutes = require('./general.js');
const authUserRoutes = require('./auth_users.js').authenticated;

const app = express();
const PORT = 5000;

// Middleware for parsing JSON request bodies
app.use(express.json());

// Middleware for session management
app.use(session({
  secret: "fingerprint_customer", // A secret key for signing the session ID cookie
  resave: true,                  // Forces the session to be saved back to the session store
  saveUninitialized: true        // Forces a session that is "uninitialized" to be saved
}));

// Authentication middleware
// This middleware will apply to all routes under /auth/*
app.use("/auth", (req, res, next) => {
  // Check if user is logged in (i.e., session has a username)
  if (req.session.username) {
    next(); // User is authenticated, proceed to the next middleware/route
  } else {
    // User is not authenticated
    res.status(401).json({ message: "User not logged in." });
  }
});

// Use the routers
app.use("/", generalRoutes);      // For general users (Tasks 1-5)
app.use("/", authUserRoutes);     // For registered users (Tasks 6-9)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});