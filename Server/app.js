var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
var api = require('./api/api');

var jsonParser = bodyParser.json();
const app = express();
app.use(cors());

app.get('/user/:email', api.getUserByEmail);

app.get('/project/:projectId', api.getProject);

app.get('/project/client/:clientId', api.getClientProjects);

app.get('/project/user/:userId', api.getUserProjects);
app.get('/client/:email', api.getClientByEmail);

app.get('/communityPosts', api.getCommunityPosts);
app.post('/addCommunityPost', jsonParser, api.addCommunityPost);
app.put('/updateCPLikeComment', jsonParser, api.updateCPLikeComment);

app.get('/showcasePosts', api.getShowcasePosts);
app.post('/addShowcasePost', jsonParser, api.addShowcasePost);
app.put('/updateSPLikeComment', jsonParser, api.updateSPLikeComment);

//Tasks
app.post('/addTask', jsonParser, api.addTask);
app.get('/user', api.getUsers);
app.get('/client', api.getClients);

server = app.listen(process.env.PORT || 8080);
