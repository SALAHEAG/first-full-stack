var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var appSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	descreption:{
		type:String,
		required: true
	}
	
});
module.exports = mongoose.model("App", appSchema);