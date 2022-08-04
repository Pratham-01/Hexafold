var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
var api = require('./api/api');

var jsonParser = bodyParser.json();
const app = express();
app.use(cors());

app.get('/client', api.getClients);
app.get('/client/:email', api.getClientByEmail);
app.post('/createClient', jsonParser, api.createClient);

app.get('/user', api.getUsers);
app.get('/user/:email', api.getUserByEmail);
app.post('/createUser', jsonParser, api.createUser);

app.get('/getTraining/:training_id', api.getTraining);
app.post('/addTraining', jsonParser, api.addTraining);
app.post('/assignTraining', jsonParser, api.assignTraining);
app.put('/updateTrainingStatus', jsonParser, api.updateTrainingStatus);

app.get('/communityPosts', api.getCommunityPosts);
app.post('/addCommunityPost', jsonParser, api.addCommunityPost);
app.put('/updateCPLikeComment', jsonParser, api.updateCPLikeComment);

app.get('/showcasePosts', api.getShowcasePosts);
app.post('/addShowcasePost', jsonParser, api.addShowcasePost);
app.put('/updateSPLikeComment', jsonParser, api.updateSPLikeComment);

app.get('/project/client/:clientId', api.getClientProjects);

app.get('/project/user/:userId', api.getUserProjects);
app.post('/createProject', jsonParser, api.createProject);
app.post('/addTask', jsonParser, api.addTask);
app.post('/updateTask', jsonParser, api.updateTask);

app.post('/addFeature', jsonParser, api.addFeature);
app.get('/project/:projectId', api.getProject);

app.get('/rewards', api.getRewards);
app.post('/createReward', jsonParser, api.createReward);
app.post('/redeemReward', jsonParser, api.redeemReward);
app.put('/updateRewardStatus', jsonParser, api.updateRewardStatus);

app.post('/addFact', jsonParser, api.addFact);
app.get('/getRandomFact/:company', jsonParser, api.getRandomFact);

server = app.listen(process.env.PORT || 8080);
