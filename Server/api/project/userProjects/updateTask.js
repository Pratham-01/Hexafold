var constants = require('../../../constants/constantVariables');
var ObjectId = require('mongodb').ObjectId;

exports.updateTask = async (req, res) => {
	try {
		console.log('Request received for updating status of a task');
		var projectId = new ObjectId(req.body.projectId);
		var featureTitle = req.body.featureTitle;
		var taskTitle = req.body.taskTitle;
		var type = req.body.type;

		var taskStatus = req.body.taskStatus ? req.body.taskStatus : '';
		var taskAssignee = req.body.taskAssignee ? req.body.taskAssignee : '';
		console.log('hello', projectId, featureTitle, taskTitle, type, taskAssignee, taskStatus);

		if (type == 'status') {
			var newvalues = { $set: { 'features.$[ele1].tasks.$[ele2].status': taskStatus } };
		} else if (type == 'assignee') {
			var newvalues = { $set: { 'features.$[ele1].tasks.$[ele2].assignedEmployee': taskAssignee } };
		} else {
			res.status(400).send({ message: 'Invalid type' });
		}

		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) {
				res.status(500).send({ errors: err });
				return;
			}

			var dbo = db.db('hexafold');
			dbo
				.collection('project')
				.updateOne(
					{ _id: projectId },
					newvalues,
					{ arrayFilters: [{ 'ele1.featureTitle': featureTitle }, { 'ele2.title': taskTitle }] },
					function (err, result) {
						if (err) {
							res.status(500).send({ errors: err });
							return;
						}
						console.log('Task updated', result);
						db.close();
						res.status(200).send({ message: 'Task updated' });
					}
				);
		});
	} catch (err) {
		res.status(500).send({ errors: err });
	}
};
