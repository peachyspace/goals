const express = require("express");
const router = express.Router(); //create a new router object
/* This function is used when you want to create a new router object in your program to handle requests */

const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

//This file stores our goal Routes

router.get("/", getGoals);
/*
router.get() is a function that tells the server what to do when a 'GET'
request at the given route is called.
It's callback function (req, res) listen's to incoming request 'req' object and respond  accordingly using the 'res' response object.
 */

router.post("/", setGoal);

//Route parameters === :id
//req.params.id gives you access to 'id' params
router.put("/:id", updateGoal);

//Delete request: http://localhost:5000/api/goals/3826
//Delete request: http://localhost:5000/api/goals/:id
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = router; //export this router to use in our server.js
