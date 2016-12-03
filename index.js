/*
	Server startup file
*/

// Imports the implemented RESTful API
var qbot = require('./qbot');

// Starts server
qbot().listen(process.env.PORT || 3000);
console.log('Server up and running...');
