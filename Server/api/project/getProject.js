var constants = require('../../constants/constantVariables');
var ObjectId = require('mongodb').ObjectId;
exports.getProject = async (req, res) => {
	console.log('Request received for getting projects of a client/user');
	var id = req.params.projectId;
	console.log('id=', id);
	constants.mongoclient.connect(constants.url, function (err, db) {
		if (err) {
			res.status(500).send({ errors: err });
			return;
		};
		var dbo = db.db('hexafold');
		dbo
			.collection('project')
			.find({ _id: new ObjectId(id) })
			.toArray((err, result) => {
				if (err) {
					res.status(500).send({ errors: err });
					return;
				};
				console.log(result);
				db.close()
				res.send(result);
			});
	});
};
