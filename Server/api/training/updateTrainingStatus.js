var constants = require('../../constants/constantVariables');
var ObjectId = require('mongodb').ObjectId;

exports.updateTrainingStatus = async (req, res) => {
	try {
		console.log('Request received for updating Training Status');
        var training_id = req.body.training_id;
        var user = req.body.user;
        var status = req.body.status;
		
		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) {
				res.status(500).send({ errors: err });
				return;
			};

            var myquery = {email: user};
            var newvalues = {$set: { 'trainings.$[ele].status': status }};
            var arrayFilters = { arrayFilters: [{ 'ele.training': new ObjectId(training_id) }] };

			var dbo = db.db('hexafold');
			dbo
				.collection('user')
				.updateOne(myquery, newvalues, arrayFilters, function(err, result) {
					if (err) {
						res.status(500).send({ errors: err });
						return;
					};
					db.close();
					res.status(200).send({message: 'Training Status Updated Successfully'})
				});
		});
	} catch (err) {
		res.status(500).send({errors: err});
	}
};