var constants = require('../../constants/constantVariables');
var ObjectId = require('mongodb').ObjectId;

exports.getRewards = async (req, res) => {
	console.log('Request received for getting rewards');
	constants.mongoclient.connect(constants.url, function (err, db) {
		if (err) throw err;
		var dbo = db.db('hexafold');
		dbo
			.collection('reward')
			.find({status: "active"})
			.toArray((err, result) => {
				if (err) throw err;
				res.send(result);
			});
	});
};
