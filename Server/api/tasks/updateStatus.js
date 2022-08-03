var constants = require('../../constants/constantVariables');
var ObjectId = require('mongodb').ObjectId;

exports.updateStatus = async (req, res) => {
	try {
		console.log('Request received for updating status of a task');
		var projectId = req.body.projectId;
		var featureTitle = req.body.featureTitle;
		var taskTitle = req.body.taskTitle;

		var taskStatus = req.body.taskStatus;
		console.log(taskStatus);

		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) throw err;

			var dbo = db.db('hexafold');
			dbo.collection('project').updateOne(
				{ _id: new ObjectId(projectId) },
				{
					$set: { 'features.$[ele1].tasks.$[ele2].status': taskStatus },
				},
				{ arrayFilters: [{ 'ele1.title': featureTitle }, { 'ele2.title': taskTitle }] },
				function (err, result) {
					if (err) throw err;
					console.log('Task status updated', result);
					res.status(200).send({ message: 'Task status updated' });
					db.close();
				}
			);
		});
	} catch (err) {
		res.status(500).send({ errors: err });
	}
};
