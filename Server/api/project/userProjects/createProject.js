const { ObjectId } = require('mongodb');
var constants = require('../../../constants/constantVariables');

exports.createProject = async (req, res) => {
	try {
		console.log('Request received for creating a project');
		var post = {
			clients: req.body.clients ? req.body.client : '',
			projectTitle: req.body.projectTitle ? req.body.projectTitle : '',
			comments: req.body.comments ? req.body.comments : '',
			features: req.body.features ? req.body.features : '',
			user: req.body.user ? req.body.user : '',
			description: req.body.description ? req.body.description : '',
		};

		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) throw err;

			var dbo = db.db('hexafold');
			dbo
				.collection('project')
				.find({ projectTitle: post.projectTitle })
				.toArray((err, result) => {
					if (result.length != 0) {
						res.status(200).send({ message: 'Project already exists' });
					} else {
						dbo.collection('project').insertOne(post, function (err, result) {
							if (err) throw err;
							console.log('New Project Added', result);
							res.status(200).send({ message: 'New Project Added' });
							db.close();
						});
					}
				});
		});
	} catch (err) {
		res.status(500).send({ errors: err });
	}
};
