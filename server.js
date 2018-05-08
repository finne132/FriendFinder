"use strict";

// require everything we need
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// start express
var app = express();
// heroku wants to be able to control the port 
var PORT = process.env.PORT || 3000;

// bodyparser nonsense
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// bring in the two routing files 
require('./app/routing/apiroutes.js')(app); 
require('./app/routing/htmlroutes.js')(app);

// start the actual server 

app.listen(process.env.PORT || 3000, function(){
	console.log('The application has been started and is now listening on PORT ' + process.env.PORT);
});