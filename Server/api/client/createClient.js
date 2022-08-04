const { ObjectId } = require('mongodb');
var constants = require('../../constants/constantVariables');

exports.createClient = async (req, res) => {
	try {
		console.log('Request received for creating a client');
		var post = {
			email: req.body.email,
			password: req.body.password,
		};

		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) throw err;

			var dbo = db.db('hexafold');
			dbo.collection('client').insertOne(post, function (err, result) {
				if (err) throw err;
				console.log('New Client Added', result);
				db.close();
				res.status(200).send({ message: 'New Client Added' });
			});
		});
	} catch (err) {
		res.status(500).send({ errors: err });
	}
};
