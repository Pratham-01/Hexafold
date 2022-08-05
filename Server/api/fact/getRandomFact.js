var constants = require('../../constants/constantVariables');
var ObjectId = require('mongodb').ObjectId;

exports.getRandomFact = async (req, res) => {
	console.log('Request received for getting random fact');

	var company = req.params.company;


	constants.mongoclient.connect(constants.url, function (err, db) {
		if (err) {
			res.status(500).send({ errors: err });	   
 			return;
	    };
		var dbo = db.db('hexafold');
		dbo
			.collection('fact')
			.find( {company_id: new ObjectId(company)} )
			.toArray((err, result) => {
				if (err) {
					res.status(500).send({ errors: err });
			   		return;
			    };

                randomFact = result[Math.floor(Math.random() * result.length)]
                console.log(randomFact);

				dbo
					.collection('company')
					.updateOne(
						{_id: new ObjectId(company)},
						{ $inc: { engagement: 1 }},
						function(err, result2) {
							if (err) {
				 				res.status(500).send({ errors: err });
								return;
			    			};

							db.close();
							res.send(randomFact);
						});

			});
	});
};