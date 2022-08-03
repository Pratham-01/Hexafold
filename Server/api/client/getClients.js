var constants = require('../../constants/constantVariables');
var ObjectId = require('mongodb').ObjectId;

exports.getClients = async (req, res) => {
	console.log('Request received for getting users');
	constants.mongoclient.connect(constants.url, function (err, db) {
		if (err) throw err;
		var dbo = db.db('hexafold');
		dbo
			.collection('client')
			.find()
			.toArray((err, result) => {
				if (err) throw err;
				res.send(result);
			});
	});
};
