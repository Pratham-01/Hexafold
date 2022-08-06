var constants = require('../../constants/constantVariables');
var ObjectId = require('mongodb').ObjectId;

exports.getTraining = async (req, res) => {
	try {
		console.log('Request received for getting training');
        var training_id = new ObjectId(req.params.training_id);
		
		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) {
				res.status(500).send({ errors: err });
				return;
		 	};	

			var dbo = db.db('hexafold');
			dbo
				.collection('training')
                .find({ _id: training_id })
                .toArray((err, result) => {
                    if (err) {
						res.status(500).send({ errors: err });
						return;
					};	
                    
					db.close();
                    res.send(result);
                });
		});
	} catch (err) {
		res.status(500).send({errors: err});
	}
};