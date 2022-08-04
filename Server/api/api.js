const createUser = require('./user/createUser');
const getUserByEmail = require('./user/getUserByEmail');
const getUsers = require('./user/getUsers');

const createClient = require('./client/createClient');
const getClientByEmail = require('./client/getClientByEmail');
const getClients = require('./client/getClients');

const getTraining = require('./training/getTraining');
const addTraining = require('./training/addTraining');
const assignTraining = require('./training/assignTraining');
const updateTrainingStatus = require('./training/updateTrainingStatus');

const getCommunityPosts = require('./communityPost/getCommunityPosts');
const addCommunityPost = require('./communityPost/addCommunityPost');
const updateCPLikeComment = require('./communityPost/updateLikeComment');

const getShowcasePosts = require('./showcasePost/getShowcasePosts');
const addShowcasePost = require('./showcasePost/addShowcasePost');
const updateSPLikeComment = require('./showcasePost/updateLikeComment');

const getClientProjects = require('./project/clientProjects/getClientProjects');

const getUserProjects = require('./project/userProjects/getUserProjects');
const createProject = require('./project/userProjects/createProject');
const addTask = require('./project/userProjects/addTask');
const updateTask = require('./project/userProjects/updateTask');

const addFeature = require('./project/addFeature');
const getProject = require('./project/getProject');

const getRewards = require('./reward/getRewards');
const createReward = require('./reward/createReward');
const redeemReward = require('./reward/redeemReward');
const updateRewardStatus = require('./reward/updateRewardStatus');

const addFact = require('./fact/addFact');
const getRandomFact = require('./fact/getRandomFact');



module.exports = {
	...createUser,
	...getUserByEmail,
	...getUsers,

	...createClient,
	...getClientByEmail,
	...getClients,

	...getTraining,
	...addTraining,
	...assignTraining,
	...updateTrainingStatus,

	...getCommunityPosts,
	...addCommunityPost,
	...updateCPLikeComment,

	...getShowcasePosts,
	...addShowcasePost,
	...updateSPLikeComment,

	...getClientProjects,

	...getUserProjects,
	...createProject,
	...addTask,
	...updateTask,
	
	...addFeature,
	...getProject,

	...getRewards,
	...createReward,
	...redeemReward,
	...updateRewardStatus,
	
	...addFact,
	...getRandomFact
};
