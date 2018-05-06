"use strict";

// requirements
var friendList = require('../data/friends.js');
var path = require('path');

module.exports = function(app){
	app.get('/api/friends', function(request, result){
		result.json(friendList);
	});

	app.post('/api/friends', function(request, result){
		friendList.push(request.body);
	})
};