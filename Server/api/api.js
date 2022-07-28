const getUserByEmail = require('./user/getUserByEmail');
const getProject = require('./projects/getProject');
const getClientProjects = require('./client/getClientProjects');
const getCommunityPosts = require('./communityPost/getCommunityPosts');
const getUserProjects = require('./projects/userProjects/getUserProjects');
module.exports = {
	...getUserByEmail,
	...getProject,
	...getClientProjects,
	...getCommunityPosts,
	...getUserProjects,
};
