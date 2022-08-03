const { ObjectId } = require('mongodb');
var constants = require('../../constants/constantVariables');

exports.addFeature = async (req, res) => {
	try {
		console.log('Request received for adding a feature');
		var projectId = req.body.projectId;
		var post = {
			projectId: req.body.projectId,
			featureTitle: req.body.featureTitle,
			accepted: req.body.accepted,
			cost: req.body.cost,
			status: req.body.status,
			start_date: req.body.start_date,
			deadline: req.body.deadline,
			tasks: req.body.tasks ? req.body.tasks : [],
		};

		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) throw err;

			var dbo = db.db('hexafold');
			dbo.collection('project').updateOne(
				{ _id: new ObjectId(projectId) },
				{ $push: { features: post } },

				function (err, result) {
					if (err) throw err;
					console.log('New Feature Added', result);
					res.status(200).send({ message: 'New Feature Added' });
					db.close();
				}
			);
		});
	} catch (err) {
		res.status(500).send({ errors: err });
	}
};
