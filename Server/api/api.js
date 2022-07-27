const getUserByEmail = require('./user/getUserByEmail');
const getProject = require('./projects/getProject');
module.exports = {
	...getUserByEmail,
	...getProject,
};
