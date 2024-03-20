// Create a basic HTTP server
const http = require("http");

const HOSTNAME = "localhost";
const PORT = 8000;

function requestHandler(req, res) {
  // 1. Get the authentication username and password from the header
  if (req.url === "/auth" && req.method === "GET") {
    const username = req.headers["username"];
    const password = req.headers["password"];
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Authentication - Username: ${username}, Password: ${password}`);
  }

  // 2. Free up the body to be able to carry payload for other method types
  else if (req.url === "/endpoint" && req.method === "POST") {
    // Process POST request
    // Free up the body by not expecting any payload
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("POST request handled successfully");
  }

  // 3. Endpoints for books
  else if (req.url === "/books") {
    switch (req.method) {
      case "GET":
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("GET all books");
        break;
      case "POST":
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Create a new book");
        break;
      case "PUT":
        // Extract book ID from URL
        const bookId = req.url.split("/").pop();
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Update book with ID ${bookId}`);
        break;
      case "PATCH":
        // Extract book ID from URL
        const patchBookId = req.url.split("/").pop();
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Patch book with ID ${patchBookId}`);
        break;
      case "DELETE":
        // Extract book ID from URL
        const deleteBookId = req.url.split("/").pop();
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Delete book with ID ${deleteBookId}`);
        break;
    }
  }

  // 4. Endpoints for authors
  else if (req.url === "/authors") {
    switch (req.method) {
      case "GET":
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("GET all authors");
        break;
      case "POST":
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Create a new author");
        break;
      case "PUT":
        // Extract author ID from URL
        const authorId = req.url.split("/").pop();
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Update author with ID ${authorId}`);
        break;
      case "PATCH":
        // Extract author ID from URL
        const patchAuthorId = req.url.split("/").pop();
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Patch author with ID ${patchAuthorId}`);
        break;
      case "DELETE":
        // Extract author ID from URL
        const deleteAuthorId = req.url.split("/").pop();
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Delete author with ID ${deleteAuthorId}`);
        break;
    }
  }

  // Handle requests to unknown routes
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
}

// Set the port for the server to listen on

const server = http.createServer(requestHandler);
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server started sucessfully at https:${HOSTNAME}:${PORT}`);
});
