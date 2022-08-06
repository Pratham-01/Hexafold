var constants = require('../../../constants/constantVariables');
var ObjectId = require('mongodb').ObjectId;

exports.updateTask = async (req, res) => {
	try {
		console.log('Request received for updating status of a task');
		var projectId = new ObjectId(req.body.projectId);
		var feature_title = req.body.feature_title;
		var task_title = req.body.task_title;
		var type = req.body.type;
<<<<<<< HEAD

		var taskStatus = req.body.taskStatus ? req.body.taskStatus : '';
		var taskAssignee = req.body.taskAssignee ? req.body.taskAssignee : '';
		console.log('hello', projectId, featureTitle, taskTitle, type, taskAssignee, taskStatus);

		if (type == 'status') {
			var newvalues = { $set: { 'features.$[ele1].tasks.$[ele2].status': taskStatus } };
		} else if (type == 'assignee') {
			var newvalues = { $set: { 'features.$[ele1].tasks.$[ele2].assignedEmployee': taskAssignee } };
=======
		
		var status = req.body.status ? req.body.status : '';
		var assignedEmployee = req.body.assignedEmployee ? req.body.assignedEmployee : '';
		console.log("hello", projectId, feature_title, task_title, type, assignedEmployee, status);
		
		if (type == 'status'){
			var newvalues = {$set: { 'features.$[ele1].tasks.$[ele2].status': status }};
		} else if (type == 'assignee') {
			var newvalues = {$set: { 'features.$[ele1].tasks.$[ele2].assignedEmployee': assignedEmployee }};
>>>>>>> 9c7b52de10f2333d223e9ab3380cd7cffb0fee82
		} else {
			res.status(400).send({ message: 'Invalid type' });
		}

		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) {
				res.status(500).send({ errors: err });
				return;
			}

			var dbo = db.db('hexafold');
<<<<<<< HEAD
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
=======
			dbo.collection('project').updateOne(
				{ _id: projectId },
				newvalues,
				{ arrayFilters: [{ 'ele1.feature_title': feature_title }, { 'ele2.task_title': task_title }] },
				function (err, result) {
					if (err) {
						res.status(500).send({ errors: err });
						return;
					};
					console.log('Task updated', result);
					db.close();
					res.status(200).send({ message: 'Task updated' });
				}
			);
>>>>>>> 9c7b52de10f2333d223e9ab3380cd7cffb0fee82
		});
	} catch (err) {
		res.status(500).send({ errors: err });
	}
};
