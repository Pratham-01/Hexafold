const getUserByEmail = require('./user/getUserByEmail');

const getUserChats = require('./chat/getUserChats');
const getChat = require('./chat/getChat');

const getTrainings = require('./training/getTrainings');
const addTraining = require('./training/addTraining');
const updateTrainingStatus = require('./training/updateTrainingStatus');

const getProject = require('./project/getProject');
const updateTask = require('./project/userProjects/updateTask');

const getClientProjects = require('./project/clientProjects/getClientProjects');
const getUserProjects = require('./project/userProjects/getUserProjects');

const getCommunityPosts = require('./communityPost/getCommunityPosts');
const addCommunityPost = require('./communityPost/addCommunityPost');
const updateCPLikeComment = require('./communityPost/updateLikeComment');

const getShowcasePosts = require('./showcasePost/getShowcasePosts');
const addShowcasePost = require('./showcasePost/addShowcasePost');
const updateSPLikeComment = require('./showcasePost/updateLikeComment');


module.exports = {
	...getUserByEmail,
	...getProject,
	...getClientProjects,
	...getCommunityPosts,
	...getShowcasePosts,
	...getUserProjects,
};
