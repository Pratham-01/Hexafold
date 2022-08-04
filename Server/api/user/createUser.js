const { ObjectId } = require('mongodb');
var constants = require('../../constants/constantVariables');

exports.createUser = async (req, res) => {
	try {
		console.log('Request received for creating a user');
		var post = {
			email: req.body.email,
			password: req.body.password,
		};

		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) throw err;

			var dbo = db.db('hexafold');
			dbo.collection('user').insertOne(post, function (err, result) {
				if (err) throw err;
				console.log('New User Added', result);
				db.close();
				res.status(200).send({ message: 'New User Added' });
			});
		});
	} catch (err) {
		res.status(500).send({ errors: err });
	}
};
