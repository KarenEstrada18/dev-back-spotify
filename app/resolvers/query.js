const actions = require("../actions");

const Users = (_, args, context, info) =>{
    return actions.getAllUsers().then(users => users)
        .catch(e => e);
};

const UserName = (_, args, context, info) => {
	return actions.getUserByName(args.name).then((user) => {
		if (!user) throw new Error("User does not exist");
		return user;
	}).catch((e) => e);
};

const UserMail = (_,args,context,info) => {
    return actions.getUserByEmail(args.email).then((user) => {
        if (!user) throw new Error("User does not exist");
        return user;
    }).catch((e) => e);
}

const Artists = (_,args,context,info) => {
    return actions.getAllArtist().then(artists => artists)
    .catch(e => e);
}

const ArtistName = (_,args,context,info) => {
    return actions.getArtistByName(args.name).then((artist) => {
        if(!artist) throw new Error ("Artist does not exist");
        return artist;
    }).catch((e) => e);
}

const Albums = (_,args,context,info) => {
    return actions.getAllAlbums().then(albums => albums)
    .catch(e => e);
}

const AlbumName = (_,args,context,info) => {
    return actions.getAlbumById(args.id).then((album) => {
        if(!album) throw new Error("Album does not exist");
        return album;
    }).catch((e) => e);
}

const AlbumId = (_,args,context,info) => {
    return actions.getAlbumByName(args.name).then((album) => {
        if(!album) throw new Error ("Album does not exist");
        return album;
    }).catch((e) => e);
}

const Songs = (_,args,context,info) => {
    return actions.getAllSongs().then(songs => songs)
    .catch(e => e);
}

const SongId = (_,args,context,info) => {
    return actions.getSongById(args.id).then((song) => {
        if(!song) throw new Error ("song does not exist");
        return song;
    }).catch((e) => e)
}

const SongName = (_,args,context,info) => {
    return actions.getSongByName(args.name).then((song) => {
        if(!song) throw new Error ("song does not exist");
        return song;
    }).catch((e) => e)
}

module.exports = {
    Users,
    UserName,
    UserMail,
    Artists,
    ArtistName,
    Albums,
    AlbumName,
    AlbumId,
    Songs,
    SongName,
    SongId
}