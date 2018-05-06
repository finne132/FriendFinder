"use strict";

// require everything we need
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// start express
var app = express();
var PORT = 3000;

// bodyparser nonsense
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// bring in the two routing files 
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// start the actual server 

app.listen(process.env.PORT || 3000, function(){
	console.log('App has been started and is now listening on PORT ' + process.env.PORT);
});