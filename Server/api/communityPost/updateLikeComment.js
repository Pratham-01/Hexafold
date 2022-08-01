var constants = require('../../constants/constantVariables');
var ObjectId = require('mongodb').ObjectId;

exports.updateCPLikeComment = async (req, res) => {
	try {
		console.log('Request received for updating Like/Comment for Community post');
        post_id = req.body.post_id;
        user = req.body.user;
        type = req.body.type;
        content = req.body.content;
		
		constants.mongoclient.connect(constants.url, function (err, db) {
			if (err) throw err;

            var myquery = {_id: new ObjectId(post_id)};
            if (type == 'like'){
                if (content == 'add') {
                    var newvalues = {$push: { "likes": user }, $inc: { likes_count: 1 } };
                } else {
                    var newvalues = {$pull: { "likes": user }, $inc: { likes_count: -1 } };
                }
                
            } else if (type == 'comment') {
                comment = {
                    user: user,
                    content: content,
                    timestamp: new Date().toLocaleString()
                };
                var newvalues = {$push: { "comments": comment }};
            } else {
                res.status(400).send({message: 'Invalid type'})
            }
            

			var dbo = db.db('hexafold');
			dbo
                .collection('community_post')
				.updateOne(myquery, newvalues, function(err, result) {
					if (err) throw err;
					console.log("Like/Comment Updated Successfully", result);
					res.status(200).send({message: 'Like/Comment Updated Successfully'})
					db.close();
				});
		});
	} catch (err) {
		res.status(500).send({errors: err});
	}
};