var constants = require('../../constants/constantVariables');
var ObjectId = require('mongodb').ObjectId;

exports.getRandomFact = async (req, res) => {
	console.log('Request received for getting random fact');

	var company = req.params.company;


	constants.mongoclient.connect(constants.url, function (err, db) {
		if (err) throw err;
		var dbo = db.db('hexafold');
		dbo
			.collection('fact')
			.find( {company_id: new ObjectId(company)} )
			.toArray((err, result) => {
				if (err) throw err;
                randomFact = result[Math.floor(Math.random() * result.length)]
                console.log(randomFact);

				dbo
					.collection('company')
					.updateOne(
						{_id: new ObjectId(company)},
						{ $inc: { engagement: 1 }},
						function(err, result2) {
							if (err) throw err;

							db.close();
							res.send(randomFact);
						});

                
			});
	});
};