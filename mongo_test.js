const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/footbook');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function calback () {
	console.log('mongo connect success');
});

var footbookSchema = mongoose.Schema({
	name: String,
	say: String
});

footbookSchema.methods.speak = function () {
	var greeting = this.name ? 'My name is ' + this.name + ". I say " + this.say : "I don't have a name.";
	console.log(greeting);
}

var fbModel = mongoose.model('fbModel', footbookSchema);

var testIns = new fbModel({
	name: "MG",
	say: 1818
});

testIns.save(function(err, testIns){
	if(err) return console.error(err);
	testIns.speak();
});

fbModel.find(function(err, models){
	if(err) return console.error(err);
	console.log("find() - "+models);
});

//fbModel.find({name:/^MG/});