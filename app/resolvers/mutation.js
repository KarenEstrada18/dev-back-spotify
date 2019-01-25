const actions = require("../actions");
const { getUserId } = require("../utils");

const signup = (_, args, context, info) => {
	return actions.signup(args.data).then(
		token => { return { "message": "User created successfully", token: token }; }
	).catch(e => e);

};

const login = (_, args,context,info) => {
	return actions.login(args).then(
		token => {return {"message": "User logged successfully", token: token };}
	).catch(e => e);
};

module.exports = {
	signup,
	login
}