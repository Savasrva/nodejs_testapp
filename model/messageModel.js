const mongoose = require('mongoose');
var userSchema = mongoose.Schema({
	userId: String,
	userName: String,
	password: String,
	comment: String,
	birthday: Number,
	regDate: {type: Date, default: Date.now}
});

var User = mongoose.model('userModel', userSchema);

module.exports = User;