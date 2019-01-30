const Album = require('../models/album');

const createAlbum = (data) => {
    return Album.create(data);
};

const getAlbumById = (id) => {
	return Album.findOne({_id:id});
};

const getAlbumByName = (name) => {
	return Album.findOne({name:name});
};

const getAllAlbums = () => {
	return Album.find();
};

const updateAlbumById = (id,data) =>{
	return Album.findByIdAndUpdate(id,{$set:data},{new:true});
};

const updateAlbumByName = (name,data) =>{
	return Album.findByIdAndUpdate(name,{$set:data},{new:true});
};

const deleteAlbumById =  (id)  => {
	return Album.findByIdAndUpdate({_id:id,is_active:true},{$set:{is_active:false}},{new:true});
};

module.exports {
    createAlbum,
    getAlbumById,
    getAlbumByName,
    getAllAlbums,
    updateAlbumById,
    updateAlbumByName,
    deleteAlbumById
}
