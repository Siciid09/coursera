<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node.js & Express Book Review API</title>
    <style>
        /* --- Basic Styles --- */
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
            line-height: 1.6;
            background-color: #f9f9f9;
            color: #333;
            margin: 0;
            padding: 0;
        }

        /* --- Container --- */
        .container {
            max-width: 900px;
            margin: 20px auto;
            padding: 24px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        /* --- Typography --- */
        h1, h2, h3 {
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
            color: #111;
        }

        h1 {
            font-size: 2.2em;
            text-align: center;
        }

        h2 {
            font-size: 1.8em;
            margin-top: 40px;
        }
        
        h3 {
            font-size: 1.4em;
            margin-top: 30px;
        }

        p {
            font-size: 1.1em;
        }

        /* --- Code Blocks --- */
        pre {
            background-color: #2d2d2d;
            color: #f1f1f1;
            padding: 16px;
            border-radius: 6px;
            overflow-x: auto;
            font-family: "Courier New", Courier, monospace;
        }

        code {
            font-family: "Courier New", Courier, monospace;
            background-color: #eee;
            padding: 2px 4px;
            border-radius: 3px;
        }

        pre > code {
            background-color: transparent;
            padding: 0;
        }

        /* --- Lists --- */
        ul {
            padding-left: 20px;
        }

        li {
            font-size: 1.1em;
            margin-bottom: 8px;
        }

        /* --- Tables --- */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }

        th {
            background-color: #f4f4f4;
            font-weight: bold;
        }

        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Developing Back-End Apps with Node.js and Express</h1>

        <p>This project is the peer-graded assignment for the Coursera course "Developing Back-End Apps with Node.js and Express" by IBM. It is a REST API for a book review application that implements public routes for general users and authenticated routes for registered users.</p>

        <h2>🚀 Features & Tasks Implemented</h2>
        <p>This project successfully implements all 14 required tasks.</p>
        
        <h3>General Users (Public Routes)</h3>
        <ul>
            <li><strong>Task 1:</strong> Get the list of all books.</li>
            <li><strong>Task 2:</strong> Get book details based on ISBN.</li>
            <li><strong>Task 3:</strong> Get all books by a specific author.</li>
            <li><strong>Task 4:</strong> Get all books by a specific title.</li>
            <li><strong>Task 5:</strong> Get book reviews based on ISBN.</li>
        </ul>

        <h3>Registered Users (Authenticated Routes)</h3>
        <ul>
            <li><strong>Task 6:</strong> Register a new user.</li>
            <li><strong>Task 7:</strong> Login as a registered user (and create a session).</li>
            <li><strong>Task 8:</strong> Add or modify a book review.</li>
            <li><strong>Task 9:</strong> Delete a book review posted by the user.</li>
        </ul>

        <h3>Node.js Client (Axios)</h3>
        <ul>
            <li><strong>Task 10:</strong> Get all books (using async-await).</li>
            <li><strong>Task 11:</strong> Search by ISBN (using Promises).</li>
            <li><strong>Task 12:</strong> Search by Author (using async-await).</li>
            <li><strong>Task 13:</strong> Search by Title (using async-await).</li>
            <li><strong>Task 14:</strong> Submission to GitHub.</li>
        </ul>

        <h2>📂 Project Structure</h2>
        <pre><code>coursera-project/
│
├── auth_users.js     # Handles registration, login, and review routes (Tasks 6-9)
├── booksdb.js        # Mock database for books and reviews
├── client.js         # Node.js Axios client for testing (Tasks 10-13)
├── general.js        # Handles all public routes (Tasks 1-5)
├── server.js         # Main Express application server
└── package.json      # Project dependencies and scripts</code></pre>

        <h2>⚙️ Installation & Setup</h2>
        <ol>
            <li><strong>Clone (or download) the repository:</strong>
                <pre><code>git clone https://github.com/your-username/your-repo-name.git</code></pre>
            </li>
            <li><strong>Navigate to the project directory:</strong>
                <pre><code>cd coursera-project</code></pre>
            </li>
            <li><strong>Install dependencies:</strong>
                <pre><code>npm install</code></pre>
            </li>
        </ol>

        <h2>▶️ How to Run</h2>
        <p>This project has two parts: the server and the client test script.</p>
        
        <h3>1. Run the Server</h3>
        <p>You must have the server running to test any endpoints or run the client script.</p>
        <pre><code># Runs the server with nodemon (auto-restarts on changes)
npm run dev

# OR

# Runs the server with plain node
node server.js</code></pre>
        <p>The server will be running at <code>http://localhost:5000</code>.</p>

        <h3>2. Run the Client Test Script (Tasks 10-13)</h3>
        <p>Open a <strong>second terminal window</strong> (leave the server running) and run:</p>
        <pre><code>node client.js</code></pre>
        <p>This will print the results for Tasks 10-13 to the console.</p>

        <h2>Endpoints (API Reference)</h2>
        <p>You can use a tool like <strong>Postman</strong> or the <strong>Thunder Client</strong> VS Code extension to test these endpoints.</p>

        <h3>Public Routes (Tasks 1-5)</h3>
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td><code>GET</code></td>
                    <td><code>/</code></td>
                    <td>Get all books.</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><code>GET</code></td>
                    <td><code>/isbn/:isbn</code></td>
                    <td>Get book details by ISBN. (e.g., <code>/isbn/1</code>)</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><code>GET</code></td>
                    <td><code>/author/:author</code></td>
                    <td>Get books by author. (e.g., <code>/author/Jane Austen</code>)</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><code>GET</code></td>
                    <td><code>/title/:title</code></td>
                    <td>Get books by title. (e.g., <code>/title/Fairy tales</code>)</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><code>GET</code></td>
                    <td><code>/review/:isbn</code></td>
                    <td>Get reviews for a book. (e.g., <code>/review/1</code>)</td>
                </tr>
            </tbody>
        </table>

        <h3>Authenticated Routes (Tasks 6-9)</h3>
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Body (JSON)</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>6</td>
                    <td><code>POST</code></td>
                    <td><code>/register</code></td>
                    <td><code>{"username":"user1","password":"pass123"}</code></td>
                    <td>Register a new user.</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td><code>POST</code></td>
                    <td><code>/login</code></td>
                    <td><code>{"username":"user1","password":"pass123"}</code></td>
                    <td>Login to get a session cookie.</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td><code>PUT</code></td>
                    <td><code>/auth/review/:isbn</code></td>
                    <td>None</td>
                    <td>Add/modify a review. (e.g., <code>/auth/review/1?review=My review!</code>)</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td><code>DELETE</code></td>
                    <td><code>/auth/review/:isbn</code></td>
                    <td>None</td>
                    <td>Delete your review. (e.g., <code>/auth/review/1</code>)</td>
                </tr>
            </tbody>
        </table>

    </div>

</body>
</html>
