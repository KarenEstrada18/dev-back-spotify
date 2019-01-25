const userActions = require('./userActions');
const authActions = require('./authActions');

module.exports = {
    ...authActions,
    ...userActions
};