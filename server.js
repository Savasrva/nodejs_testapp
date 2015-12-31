const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
mongoose.connect('mongodb://localhost:27017/footbook', function(err){
	if(err){
		console.log('mongooese conection error' + err);
		throw err;
	}
	http.createServer(app).listen(app.get('port'), function(){
	  console.log('Express server listening on port ' + app.get('port'));
	});
});