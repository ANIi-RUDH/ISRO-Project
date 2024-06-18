import express from "express";
import bodyParser from "body-parser";

// Create Express application
const app = express();
const port = 3000;

// Middleware for parsing URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to serve static files from the 'public' directory
app.use(express.static("public"));


// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", "./views"); 

// Route handler for the root path
app.get('/', async (req, res) => {
  try {
    res.render("index2.ejs");
  } catch (error) {
    console.error("Something went wrong:", error.message);
    res.send("Problem occurred while rendering the view.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is Hot And Running at port: ${port}`);
});
