var mongoose = require('mongoose');

// dash Schema
var dashSchema = mongoose.Schema({
	mothername: {
		type: String
	},
	fathername: {
		type: String
	},
	address: {
		type: String
	},
	qualificaion: {
		type: String
	}
});

var User = module.exports = mongoose.model('Dash', dashSchema);
