var constants = require('../../../constants/constantVariables');
var ObjectId = require('mongodb').ObjectId;

exports.getUserProjects = async (req, res) => {
	console.log('Request received for getting projects of a user');
	var id = req.params.userId;
	constants.mongoclient.connect(constants.url, function (err, db) {
		if (err) {
			res.status(500).send({ errors: err });
			return;
		};
		var dbo = db.db('hexafold');
		dbo
			.collection('project')
			.find({ user: new ObjectId(id) })
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
