var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

// Set the port 
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ROUTES
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//LISTNER
app.listenerCount(PORT, function() {
    console.log("App listening to PORT: " + PORT);
});