var express = require('express');
var bodyParser = require('body-parser');
const app = express();
var api = require('./api/api');
app.get('/user/:email', api.getUserByEmail);
app.get('/project/:projectId', api.getProject);
app.get('/client/:clientId', api.getClientProjects);
app.get('/project/user/:userId', api.getUserProjects);
app.get('/communityPosts', api.getCommunityPosts);
app.get('/showcasePosts', api.getShowcasePosts);

server = app.listen(8080);
