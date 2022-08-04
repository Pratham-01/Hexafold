var constants = require('../../constants/constantVariables');
var ObjectId = require('mongodb').ObjectId;

exports.addTraining = async (req, res) => {
	try {
		console.log('Request received for adding Training');
		var training = {
			title: req.body.title,
			content: req.body.content,
			reward: req.body.reward ? req.body.reward: 0,
            urls: req.body.urls
		};

		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) throw err;

			var dbo = db.db('hexafold');

            dbo
				.collection('training')
				.insertOne(training, function(err, result) {
					if (err) throw err;
                   
                        console.log("Training Added", result);
                        db.close();
                        res.status(200).send({message: 'New Training Added'})
                    });
			
		});
	} catch (err) {
		res.status(500).send({errors: err});
	}
};