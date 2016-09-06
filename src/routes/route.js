var express = require("express");
var appRoutes = express.Router();
var App = require("../models/model");
appRoutes.route("/")

.get(function (req, res) {
		App.find(function (err, app) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(app);
			}
		});
	})
	.post(function (req, res) {
		var newPost = new App(req.body);
		newPost.save(function (err, newPostObj) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(newPostObj);
			}
		});
	});

appRoutes.route("/:id")

.get(function (req, res) {
		App.findById(req.param.id, function (err, NewGet) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(NewGet)
			}
		});
	})
	.put(function (req, res) {
		App.findByIdAndUpdate(req.params.id, req.body, function (err, update) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(update);
			}
		});
	})
	.delete(function (req, res) {
		App.findByIdAndRemove(req.params.id, function (err, deleteOne) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(deleteOne);
			}
		});
	});
module.exports = appRoutes;