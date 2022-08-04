var constants = require('../../constants/constantVariables');
var ObjectId = require('mongodb').ObjectId;

exports.getRewards = async (req, res) => {
	console.log('Request received for getting rewards');
	var company = req.params.company;

	constants.mongoclient.connect(constants.url, function (err, db) {
		if (err) {
			res.status(500).send({ errors: err });
			return;
		};
		var dbo = db.db('hexafold');
		dbo
			.collection('reward')
			.find({ company_id: new ObjectId(company), status: 'active' })
			.toArray((err, result) => {
				if (err) {
					res.status(500).send({ errors: err });
					return;
				};
				db.close();
				res.send(result);
			});
	});
};
