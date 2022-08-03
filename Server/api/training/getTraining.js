var constants = require('../../constants/constantVariables');
var ObjectId = require('mongodb').ObjectId;

exports.getTraining = async (req, res) => {
	try {
		console.log('Request received for getting training');
        var training_id = req.params.training_id;
		
		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) throw err;

			var dbo = db.db('hexafold');
			dbo
				.collection('training')
                .find({ _id: new ObjectId(training_id) })
                .toArray((err, result) => {
                    if (err) throw err;
                    res.send(result);
                    db.close();
                });
		});
	} catch (err) {
		res.status(500).send({errors: err});
	}
};