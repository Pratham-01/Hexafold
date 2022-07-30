var constants = require('../../constants/constantVariables');
exports.getClientByEmail = async (req, res) => {
	console.log('Request received for getting client details from email');
	var email = req.params.email;
	constants.mongoclient.connect(constants.url, function (err, db) {
		if (err) throw err;
		var dbo = db.db('hexafold');
		dbo
			.collection('client')
			.find({ email: email })
			.toArray((err, result) => {
				if (err) throw err;
				res.send(result);
			});
	});
};
