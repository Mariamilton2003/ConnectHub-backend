// Import the 'express' module
import express from "express";
import config from "./config/index";
import db from "./db/database";
import { users } from "./db/schema/users";
// Create an Express application
const app = express();

// Set the port number for the server
const port = config.app.port || 3000;
// Define a route for the root path ('/')
app.get("/", (req, res) => {
  // Send a response to the client
  db.select().from(users).then((data:any) => {
    console.log(data);
  });
  res.send("Hello, World!"); 
}); 
// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});
