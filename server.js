// Require the following npm packages inside of the server.js file:
//    * express
//    * method-override
//    * body-parser

//Dependencies
var express = require("express");
var mysql = require("mysql");
var methodOverrride = require("method-override");
var bodyParser = require("body-parser");
var orm = require("./config/orm.js")

// Create instance of express app.
var PORT = process.env.PORT || 3000;
var app = express();


app.use(express.static(__dirname + "/public"))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(methodOverrride("_method"))
var exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main"}))
app.set("view engine", "handlebars")

var routes = require("./controllers/burgers_controllers")

app.use("/", routes)
app.use('/update', routes)

app.listen(PORT, function() {
	console.log("Listening on port:%s", PORT)
})

//orm.create will call the create function and then values need to passed into it
