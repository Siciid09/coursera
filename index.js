const express = require("express");
const app = express();
const books = require("./routes/books.js");
const users = require("./routes/users.js");

app.use(express.json());

// routes
app.use("/books", books);
app.use("/users", users);

// default route
app.get("/", (req, res) => {
  res.send("Welcome to Book Review API!");
});

// start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
