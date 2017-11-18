var burger = require("../models/burger.js");

var express = require('express');
var app = express();
var router = express.Router();
console.log("Hello there, i am burger",burger)
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
 	burger.all(function(burgerData) {
    console.log(burgerData);
    res.render("index", { burgerData });
  });
});

router.post("/api/burgers", function(req, res) {
 	burger.create(req.body.burger_name, function(result) {
    // Send back the ID of the new quote
    console.log(result)
    res.redirect("/");
  });
});

router.put("/api/burgers/update", function(req, res) {
  console.log("body", req.body)
  burger.update(req.body.id, function(result) {
    console.log(result)
    res.redirect('/');
  })
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

 	burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;


