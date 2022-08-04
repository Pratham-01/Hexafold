var constants = require('../../constants/constantVariables');
var ObjectId = require('mongodb').ObjectId;

exports.addTraining = async (req, res) => {
	try {
		console.log('Request received for adding Training');
		var training = {
			// assignor: req.body.assignor,
			title: req.body.title,
			content: req.body.content,
			reward: req.body.reward ? req.body.reward: 0,
            urls: req.body.urls
		};

        var assignees = req.body.assignees;
        var userTraining = {};
		
		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) throw err;

			var dbo = db.db('hexafold');

            dbo
				.collection('training')
				.insertOne(training, function(err, result) {
					if (err) throw err;
                    userTraining = {
                        training: result.insertedId,
                        status: "pending"
                    }

                    dbo
                        .collection('user')
                        .updateMany(
                            {email: {$in: assignees }},
                            {$push: {trainings: userTraining}},
                            function(err, result) {
                            if (err) throw err;
                            console.log("Training Added", result);
                            res.status(200).send({message: 'New Training Added'})
                            db.close();
                        });
				});

			
		});
	} catch (err) {
		res.status(500).send({errors: err});
	}
};