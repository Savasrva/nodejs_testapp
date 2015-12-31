var express = require('express');
var router = express.Router();
var UserModel = require('../model/UserModel')
var lastTime = new Date();
router.get('/join', function(req, res, next) {
  res.render('join');
});

router.post('/userInsert', function(req, res, next) {
	var nUser = new UserModel({
								userId: req.body.userId,
								userName: req.body.userName,
								password: req.body.password,
								comment: req.body.comment,
								birthday: req.body.birthday,
								regDate: new Date()
							});

	nUser.save(function(err, silence){
		if (err) throw err;
		res.send('success');
	});
});

router.get('/member', function(req, res, next) {
	UserModel.find().select('userId userName comment birthday regDate').exec(function (err, users){
		if (err) throw err;
		res.render('member', {users: users});
	});
});

// router.get('/freshMember', function(req, res, next) {
// 	UserModel.find().where('regDate').gt(lastTime).select('userId userName comment birthday regDate').exec(function (err, users){
// 		if (err) console.error(err);
// 		lastTime = new Date();
// 		res.send(users);
// 	});
// });

module.exports = router;