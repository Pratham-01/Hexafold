var constants = require('../../constants/constantVariables');

exports.addCommunityPost = async (req, res) => {
	try {
		console.log('Request received for adding community post');
		var post = {
			post_type: req.body.post_type,
			title: req.body.title,
			content: req.body.content,
			tags: [] /* change */,
			is_pinned: false,
			likes_count: 0,
			likes: [],
			comments: [],
		};

		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) throw err;

			var dbo = db.db('hexafold');
			dbo.collection('community_post').insertOne(post, function (err, result) {
				if (err) throw err;
				console.log('New Community Post Added', result);
				res.status(200).send({ message: 'New Community Post Added' });
				db.close();
			});
		});
	} catch (err) {
		res.status(500).send({ errors: err });
	}
};
