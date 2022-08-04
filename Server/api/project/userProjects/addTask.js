const { ObjectId } = require('mongodb');
var constants = require('../../../constants/constantVariables')

exports.addTask = async (req, res) => {
	try {
		console.log('Request received for adding a task to a feature');
		var projectId = req.body.projectId;
		var featureTitle = req.body.featureTitle;
		var post = {
			priority: req.body.priority,
			task_title: req.body.taskTitle,
			description: req.body.description,
			startDateTime: req.body.startDateTime,
			deadline: req.body.deadline,
			asignor: req.body.assignor, //pushpit ko batana h
			status: 'pending',
			assignedEmployee: req.body.assignedEmployee,
			reward_points: req.body.rewardPoints ? req.body.rewardPoints : 0,
		};

		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) {
				res.status(500).send({ errors: err });
				return;
			};

			var dbo = db.db('hexafold');
			dbo.collection('project').updateOne(
				{ _id: new ObjectId(projectId) },
				{
					$push: { 'features.$[ele].tasks': post },
				},
				{ arrayFilters: [{ 'ele.title': featureTitle }] },
				function (err, result) {
					if (err) {
						res.status(500).send({ errors: err });
						return;
					};
					console.log('New Task Added', result);
					db.close();
					res.status(200).send({ message: 'New Task Added' });
				}
			);
		});
	} catch (err) {
		res.status(500).send({ errors: err });
	}
};
