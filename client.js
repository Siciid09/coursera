const axios = require('axios');
const API_BASE_URL = 'http://localhost:5000'; // Make sure your server is running on this port

// --- Task 10: Get all books (using async callback) ---
const getAllBooks = () => {
  axios.get(`${API_BASE_URL}/`)
    .then(response => {
      console.log("--- Task 10: Get All Books ---");
      console.log(JSON.stringify(response.data, null, 2));
    })
    .catch(error => {
      console.error("Error fetching all books:", error.message);
    });
};

// --- Task 11: Search by ISBN (using Promises) ---
const getBookByISBN = (isbn) => {
  console.log(`\n--- Task 11: Get Book by ISBN (${isbn}) ---`);
  
  // Create a new promise
  new Promise((resolve, reject) => {
    axios.get(`${API_BASE_URL}/isbn/${isbn}`)
      .then(response => {
        // On success, resolve the promise
        resolve(response.data);
      })
      .catch(error => {
        // On error, reject the promise
        reject(error.response ? error.response.data : error.message);
      });
  })
  .then(book => {
    // Handle the resolved promise
    console.log(JSON.stringify(book, null, 2));
  })
  .catch(error => {
    // Handle the rejected promise
    console.error(error);
  });
};

// --- Task 12: Search by Author (using async/await) ---
const getBooksByAuthor = async (author) => {
  console.log(`\n--- Task 12: Get Books by Author (${author}) ---`);
  try {
    const response = await axios.get(`${API_BASE_URL}/author/${author}`);
    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
  }
};

// --- Task 13: Search by Title (using async/await) ---
const getBooksByTitle = async (title) => {
  console.log(`\n--- Task 13: Get Books by Title (${title}) ---`);
  try {
    const response = await axios.get(`${API_BASE_URL}/title/${title}`);
    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
  }
};


// --- Function calls to execute the tasks ---
// We'll wrap them in a main async function to run them in order
const runClientTests = async () => {
  getAllBooks(); // Task 10
  
  // Wait for 1 second to let the first request finish (for cleaner console output)
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  getBookByISBN("2"); // Task 11 (Valid ISBN)
  
  // Wait
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  getBookByISBN("99"); // Task 11 (Invalid ISBN)

  // Wait
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  await getBooksByAuthor("Jane Austen"); // Task 12 (Valid Author)
  
  // Wait
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  await getBooksByTitle("Things Fall Apart"); // Task 13 (Valid Title)
};

// Run the tests
runClientTests();