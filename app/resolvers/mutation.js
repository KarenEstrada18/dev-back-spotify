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

const updateUser = (_,args,context,info) => {
	return actions.updateUserById(args.id, args.data).then((user) => {
		if (!user) throw new Error("User does not exist");
		return user;
	}).catch((e) => e);
};

const deleteUser = (_, args, context, info) => {
	return actions.deleteUserById(args.id).then((user) => {
		if (!user) throw new Error("User does not exist");
		return "User deleted successfully";
	}).catch((e) => e);
};

const createArtist = async (_,args,context,info) => {
};

const updateArtist = async (_, args, context, info) => {
	await getUserId(context);
	return actions.updateArtistById(args.id, args.data).then((artist) => {
		if (!artist) throw new Error("Post does not exist");
		return post;
	}).catch(e => e);
};

const deleteArtist = async (_, args, context, info) => {
	await getUserId(context);
	return actions.deleteArtistById(args.id).then((artist) => {
		if (!artist) throw new Error("Post does not exist");
		return "Post deleted seccessfully";
	}).catch((e) => e);
};

module.exports = {
	signup,
	login,
	updateUser,
	deleteUser,
	createArtist,
	updateArtist,
	deleteArtist
}