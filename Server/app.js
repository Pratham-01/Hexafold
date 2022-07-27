var express = require('express');
var bodyParser = require('body-parser');
const app = express();
//var mongoclient = require('mongodb').MongoClient;
var api = require('./api/api');

var url =
	'mongodb+srv://hexafold:czZ7r2WUsoAcNZ3y@cluster0.jcb819v.mongodb.net/?retryWrites=true&w=majority';

app.get('/user/:email', api.getUserByEmail);
app.get('/project/:id', api.getProject);

server = app.listen(8080);
