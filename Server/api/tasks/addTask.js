const { ObjectId } = require('mongodb');
var constants = require('../../constants/constantVariables');

exports.addTask = async (req, res) => {
	try {
		console.log('Request received for adding a task to a feature');
		var projectId = req.body.projectId;
		var featureTitle = req.body.featureTitle;
		var post = {
			priority: req.body.priority,
			taskTitle: req.body.task_Title,
			description: req.body.description,
			startDateTime: req.body.startDateTime,
			deadline: req.body.deadline,
			asignee: req.body.assignee,
			status: req.body.status,
			assignedEmployee: req.body.assignedEmployee,
			rewardsPoints: req.body.rewardPoints ? req.body.rewardPoints : 0,
		};

		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) throw err;

			var dbo = db.db('hexafold');
			dbo.collection('project').updateOne(
				{ _id: new ObjectId(projectId) },
				{
					$push: { 'features.$[ele].tasks': post },
				},
				{ arrayFilters: [{ 'ele.title': featureTitle }] },
				function (err, result) {
					if (err) throw err;
					console.log('New Task Added', result);
					res.status(200).send({ message: 'New Task Added' });
					db.close();
				}
			);
		});
	} catch (err) {
		res.status(500).send({ errors: err });
	}
};
