// Require the following npm packages inside of the server.js file:
//    * express
//    * method-override
//    * body-parser

//Dependencies
var express = require("express");
var mysql = require("mysql");
var methodOverrride = require("method-override");
var bodyParser = require("body-parser");

// Create instance of express app.
var app = express();
var PORT = process.env.PORT || 3000;
