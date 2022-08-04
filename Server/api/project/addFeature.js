const { ObjectId } = require('mongodb');
var constants = require('../../constants/constantVariables');

exports.addFeature = async (req, res) => {
	try {
		console.log('Request received for adding a feature');
		var projectId = req.body.projectId;
		var post = {
			manager_acceptance: false,
			client_acceptance: false,
			feature_title: req.body.featureTitle,
			// description: req.body.description,
			cost: 0,
			status: "pending",
			// start_date: req.body.start_date,
			// deadline: req.body.deadline,
			tasks: [],
		};

		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) {
				res.status(500).send({ errors: err });
				return;
			};

			var dbo = db.db('hexafold');
			dbo.collection('project').updateOne(
				{ _id: new ObjectId(projectId) },
				{ $push: { features: post } },

				function (err, result) {
					if (err) {
						res.status(500).send({ errors: err });
						return;
					};
					console.log('New Feature Added', result);
					db.close();
					res.status(200).send({ message: 'New Feature Added' });
				}
			);
		});
	} catch (err) {
		res.status(500).send({ errors: err });
	}
};
