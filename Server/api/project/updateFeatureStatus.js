const { ObjectId } = require('mongodb');
var constants = require('../../constants/constantVariables');

exports.updateFeatureStatus = async (req, res) => {
	try {
		console.log('Request received for update status of feature');
		var projectId = req.body.projectId;
		var featureTitle = req.body.featureTitle;
		var user_type = req.body.user_type;
		var status = req.body.status;
		var cost = req.body.cost ? req.body.cost : 0;

		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) {
				res.status(500).send({ errors: err });
				return;
			};

            if (user_type == 'client'){
                var upadteValues = {
                    $set: { 'features.$[ele].client_acceptance': status },
                };
            } else {
                var upadteValues = {
                    $set: { 
                        'features.$[ele].manager_acceptance': status,
                        'features.$[ele].cost': cost
                    },
                };
            }
			var dbo = db.db('hexafold');
			dbo.collection('project').updateOne(
				{ _id: new ObjectId(projectId) },
				upadteValues,
				{ arrayFilters: [{ 'ele.title': featureTitle }] },
				function (err, result) {
					if (err) {
						res.status(500).send({ errors: err });
						return;
					};
					db.close();
					res.status(200).send({ message: 'Feature Status Updated' });
				}
			);
		});
	} catch (err) {
		res.status(500).send({ errors: err });
	}
};
