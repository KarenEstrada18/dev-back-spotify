const Song = require('../models/songs');

const createSong = (data) => {
    return Song.create(data);
};

const getSongById = (id) => {
	return Song.findOne({_id:id});
};

const getSongByName = (name) => {
	return Song.findOne({name:name});
};

const getAllSong = () => {
	return Song.find();
};

const updateSongById = (id,data) =>{
	return Song.findByIdAndUpdate(id,{$set:data},{new:true});
};

const updateSongByName = (name,data) =>{
	return Song.findByIdAndUpdate(name,{$set:data},{new:true});
};

const deleteSongById =  (id)  => {
	return Song.findByIdAndUpdate({_id:id,is_active:true},{$set:{is_active:false}},{new:true});
};

module.exports {
   createSong,
   getAllSong,
   getSongById,
   getSongByName,
   updateSongById,
   updateSongByName,
   deleteSongById
}
