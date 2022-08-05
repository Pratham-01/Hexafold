var constants = require('../../constants/constantVariables');

exports.addCommunityPost = async (req, res) => {
	try {
		console.log('Request received for adding community post');
		var post = {
			post_type: req.body.post_type,
			company_id: req.body.company_id,
			title: req.body.title,
			content: req.body.content,
			tags: [] /* change */,
			is_pinned: false,
			likes_count: 0,
			likes: [],
			comments: [],
			date_posted: new Date().toISOString().split("Z")[0].split("T").join(" ")
		};

		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) {
				res.status(500).send({ errors: err });
				return;
			};

			var dbo = db.db('hexafold');
			dbo.collection('community_post').insertOne(post, function (err, result) {
				if (err) {
					res.status(500).send({ errors: err });
				   	return;
			    };
				console.log('New Community Post Added', result);
				db.close();
				res.status(200).send({ message: 'New Community Post Added' });
			});
		});
	} catch (err) {
		res.status(500).send({ errors: err });
	}
};
