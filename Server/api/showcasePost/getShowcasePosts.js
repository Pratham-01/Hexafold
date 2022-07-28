var constants = require('../../constants/constantVariables');

exports.getShowcasePosts = async (req, res) => {
	console.log('Request received for getting showcase posts');
	constants.mongoclient.connect(constants.url, function (err, db) {
		if (err) throw err;
		var dbo = db.db('hexafold');
		dbo
			.collection('showcase_post')
			.find()
			.toArray((err, result) => {
				if (err) throw err;
				console.log(result);
				res.send(result);
			});
	});
};
