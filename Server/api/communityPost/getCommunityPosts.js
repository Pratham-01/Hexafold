var constants = require('../../constants/constantVariables');

exports.getCommunityPosts = async (req, res) => {
	console.log('Request received for getting community posts');
	constants.mongoclient.connect(constants.url, function (err, db) {
		if (err) throw err;
		var dbo = db.db('hexafold');
		dbo
			.collection('community_post')
			.find()
			.toArray((err, result) => {
				if (err) throw err;
				console.log(result);
				res.send(result);
			});
	});
};