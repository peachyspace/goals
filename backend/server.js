/*
This is the entry point to my server 

The root is where all my backend dependencies are going to go
- dependencies: Express.js 
- these dependencies are located in a folder called node modules in the root
*/

const express = require("express"); //import express module
const dotenv = require("dotenv").config();
//const port = 5000;
const port = process.env.PORT || 5000;

const { errorHandler } = require("./middleware/errorMiddleware");

const app = express(); // Creates an Express application which is an object

app.use(express.json()); //For every request: Add request data sent in JSON format to req.body
app.use(express.urlencoded({ extended: false })); //For every request: Add request data encoded in the URL to req.body

// Mount a router on a path
//app.use(path, router)
app.use("/api/goals", require("./routes/goalRoutes"));
/*
The router will be used for all paths/routes that begin with that
path segment

The router will handle all requests that begin with '/api/goals
 */

app.use(errorHandler); //for every request we will override the defualt Express error handler

app.listen(port, () => console.log(`Server started on port ${port}`));
