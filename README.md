Developing Back-End Apps with Node.js and ExpressThis project is the peer-graded assignment for the Coursera course "Developing Back-End Apps with Node.js and Express" by IBM. 
It is a REST API for a book review application that implements public routes for general users and authenticated routes for registered users.
🚀 Features & Tasks Implemented
This project successfully implements all 14 required tasks.General Users (Public Routes)

Task 1: Get the list of all books.
Task 2: Get book details based on ISBN.
Task 3: Get all books by a specific author.
Task 4: Get all books by a specific title.Task 
5: Get book reviews based on ISBN.
Registered Users (Authenticated Routes)
Task 6: Register a new user.
Task 7: Login as a registered user (and create a session).
Task 8: Add or modify a book review.
Task 9: Delete a book review posted by the user.Node.js Client (Axios)
Task 10: Get all books (using async-await).
Task 11: Search by ISBN (using Promises).
Task 12: Search by Author (using async-await).
Task 13: Search by Title (using async-await).
Task 14: Submission to GitHub.📂 Project Structurecoursera-project/
│
├── auth_users.js     # Handles registration, login, and review routes (Tasks 6-9)
├── booksdb.js        # Mock database for books and reviews
├── client.js         # Node.js Axios client for testing (Tasks 10-13)
├── general.js        # Handles all public routes (Tasks 1-5)
├── server.js         # Main Express application server
└── package.json      # Project dependencies and scripts
⚙️ Installation & SetupClone (or download) the repository:Bashgit clone https://github.com/your-username/your-repo-name.git
Navigate to the project directory:Bashcd coursera-project
Install dependencies:Bashnpm install
▶️ How to RunThis project has two parts: the server and the client test script.1. Run the ServerYou must have the server running to test any endpoints or run the client script.Bash# Runs the server with nodemon (auto-restarts on changes)
npm run dev

# OR

# Runs the server with plain node
node server.js
The server will be running at http://localhost:5000.2. Run the Client Test Script (Tasks 10-13)Open a second terminal window (leave the server running) and run:Bashnode client.js
This will print the results for Tasks 10-13 to the console.Endpoints (API Reference)You can use a tool like Postman or the Thunder Client VS Code extension to test these endpoints.Public Routes (Tasks 1-5)TaskMethodEndpointDescription1GET/Get all books.2GET/isbn/:isbnGet book details by ISBN. (e.g., /isbn/1)3GET/author/:authorGet books by author. (e.g., /author/Jane Austen)4GET/title/:titleGet books by title. (e.g., /title/Fairy tales)5GET/review/:isbnGet reviews for a book. (e.g., /review/1)Authenticated Routes (Tasks 6-9)TaskMethodEndpointBody (JSON)Description6POST/register{"username":"user1","password":"pass123"}Register a new user.7POST/login{"username":"user1","password":"pass123"}Login to get a session cookie.8PUT/auth/review/:isbnNoneAdd/modify a review. (e.g., /auth/review/1?review=My review!)9DELETE/auth/review/:isbnNoneDelete your review. (e.g., /auth/review/1)
