var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require("morgan");
var port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/fsp", require("./routes/route"));
app.use(express.static("../global"));


mongoose.connect("mongodb://localhost/fullstackproject", function () {
	console.log("data base is connected")
});

app.listen(port, function () {
	console.log("your server is running on port " + port);
});