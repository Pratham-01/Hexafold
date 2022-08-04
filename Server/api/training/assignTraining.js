var constants = require('../../constants/constantVariables');
var ObjectId = require('mongodb').ObjectId;

exports.assignTraining = async (req, res) => {
	try {
		console.log('Request received to assign Training');

        var assignees = req.body.assignees;
        var userTraining = {};
		
		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) throw err;

            userTraining = {
                training: req.body.training,
                status: "pending"
            }

			var dbo = db.db('hexafold');
                dbo
                    .collection('user')
                    .updateMany(
                        {email: {$in: assignees }},
                        {$push: {trainings: userTraining}},
                        function(err, result) {
                        if (err) throw err;
                        console.log("Training Assigned", result);
                        db.close();
                        res.status(200).send({message: 'Training Assigned'})
                    });			
		});
	} catch (err) {
		res.status(500).send({errors: err});
	}
};