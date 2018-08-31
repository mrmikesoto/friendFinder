/*
                Michael Soto
                FriendFinder
                08/30/18

            This app will simulate 
            pairing a person with
            another with similar
            likes, dislikes, and
            tastes.

*/



// Set up all dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyparser = require("body-parser");

// Instantiate the express app
var app = express();

// Set the PORT and prep for Heroku deployment
var PORT = process.env.PORT || 8080;

// Set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Home Route
app.get("/", function(req, res){
    res.render("index", );
});