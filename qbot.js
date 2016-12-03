/*
	Qbot webservice
*/

// Imports modules
var express = require('express');					// Express.js
/*
var mongoose = require('mongoose');					// mongoose (MongoDB driver)
var bodyparser = require('body-parser');			// body-parser (parse HTTP request body)
var tripSchema = require('./db/schemas/trip');
var userSchema = require('./db/schemas/user');
var vehicleSchema = require('./db/schemas/vehicle');

// Connects mongoose to mongodb service
mongoose.connect('mongodb://smartfare:5m4r7f4r3@ds053216.mlab.com:53216/smartfare');

// Creates mongoose models for each schema
// Parameters are: model name, schema, collection name
var Trip = mongoose.model('Trip', tripSchema, 'trips');
var User = mongoose.model('User', userSchema, 'users');
var Vehicle = mongoose.model('Vehicle', vehicleSchema, 'vehicles');
*/

// Export API methods
module.exports = function() {
	// Creates and Express.js app
	var app = express();

	// Makes app able to use the body-parser module functionality
	//app.use(bodyparser.json());

	app.use(express.static(__dirname + '/public'));

	/* =====================FRONT END ROUTES=====================*/

	// Index page
	app.get('/', function(req, res) {
        res.sendFile('/public/index.html'); // load our public/index.html file
    });
/*
    app.get('/admin/trips', function(req, res) {
        res.sendFile(__dirname + '/public/views/tripsView.html');
    });
*/

	return app;
}
