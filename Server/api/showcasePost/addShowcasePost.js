var constants = require('../../constants/constantVariables');

exports.addShowcasePost = async (req, res) => {
	try {
		console.log('Request received for adding showcase post');
		var post = {
			post_type: req.body.post_type,
			title: req.body.title,
			content: req.body.content,
			tags: [], /* change */
			is_pinned: false,
			likes_count: 0,
			likes: [],
			comments: [],
		};
		
		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) {
				res.status(500).send({ errors: err });   
				return;
			};

			var dbo = db.db('hexafold');
			dbo
				.collection('showcase_post')
				.insertOne(post, function(err, result) {
					if (err) {
				 		res.status(500).send({ errors: err });
						return;
			    	};
					console.log("New Showcase Post Added", result);
					db.close();
					res.status(200).send({message: 'New Showcase Post Added'})
				});
		});
	} catch (err) {
		res.status(500).send({errors: err});
	}
};