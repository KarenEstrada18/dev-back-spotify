const actions = require("../actions");
const { getUserId } = require("../utils");
const { storeUpload } = require("../utils");

const signup = async(_, args, context, info) => {
	const {createReadStream} = await args.data.profile_image;
	const stream = createReadStream();
	const { url } = await storeUpload(stream);
	args.data.profile_image = url;
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
	return actions.updateUserByName(args.name, args.data).then((user) => {
		if (!user) throw new Error("User does not exist");
		return user;
	}).catch((e) => e);
};

const deleteUser = (_, args, context, info) => {
	return actions.deleteUserByName(args.name).then((user) => {
		if (!user) throw new Error("User does not exist");
		return "User deleted successfully";
	}).catch((e) => e);
};

const createArtist = async (_,args,context,info) => {
	return actions.createArtist(args.data).then(
		artist => { return { "message": "Artist created successfully", artist: artist}; }
		).catch(e => e);
	
};

const updateArtist = async (_, args, context, info) => {
	await updateArtistId(context);
	return actions.updateArtistById(args.id, args.data).then((artist) => {
		if (!artist) throw new Error("Artist does not exist");
		return artist;
	}).catch(e => e);
};


const deleteArtist = async (_, args, context, info) => {
	await deleteArtistId(context);
	return actions.deleteArtistById(args.id).then((artist) => {
		if (!artist) throw new Error("Artist does not exist");
		return "Artist deleted seccessfully";
	}).catch((e) => e);
};

const createAlbum = async (_,args,context,info) => {
	return actions.createAlbum(args.data).then(
		album => { return { "message": "Album created successfully", album: album}; }
		).catch(e => e);
	
};

const updateAlbum = async (_, args, context, info) => {
	await updateAlbumId(context);
	return actions.updateAlbumById(args.id, args.data).then((album) => {
		if (!album) throw new Error("Album does not exist");
		return album;
	}).catch(e => e);
};

const updateAlbumN = async (_, args, context, info) => {
	await updateAlbumName(context);
	return actions.updateAlbumByName(args.name, args.data).then((album) => {
		if (!album) throw new Error("Album does not exist");
		return album;
	}).catch(e => e);
};

const deleteAlbum = async (_, args, context, info) => {
	await deleteAlbumId(context);
	return actions.deleteAlbumById(args.id).then((album) => {
		if (!album) throw new Error("Album does not exist");
		return "Album deleted seccessfully";
	}).catch((e) => e);
};

const createSong = async (_,args,context,info) => {
	return actions.createSong(args.data).then(
		song => { return { "message": "Song created successfully", song: song}; }
		).catch(e => e);
	
};

const updateSong = async (_, args, context, info) => {
	await updateSongId(context);
	return actions.updateSongById(args.id, args.data).then((song) => {
		if (!song) throw new Error("Song does not exist");
		return song;
	}).catch(e => e);
};

const updateSongN = async (_, args, context, info) => {
	await updateSongName(context);
	return actions.updateSongByName(args.name, args.data).then((song) => {
		if (!song) throw new Error("Song does not exist");
		return song;
	}).catch(e => e);
};

const deleteSong = async (_, args, context, info) => {
	await deleteSongId(context);
	return actions.deleteSongById(args.id).then((somg) => {
		if (!song) throw new Error("Song does not exist");
		return "Song deleted seccessfully";
	}).catch((e) => e);
};

module.exports = {
	signup,
	login,
	updateUser,
	deleteUser,
	createArtist,
	updateArtist,
	deleteArtist,
	createAlbum,
	updateAlbum,
	updateAlbumN,
	deleteAlbum,
	createSong,
	updateSong,
	updateSongN,
	deleteSong
}