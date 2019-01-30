const Artist = require ('../models/artists');

const createArtist = (data) => {
    return Artist.create(data);
};

const updateArtistById = (id, data) => {
    return Artist.findByIdAndUpdate(id,{$set:data},{new:true});
};

const updateArtistByName = (name,data) => {
    return Artist.findByIdAndUpdate(name,{$set:data} ,{new:true})
};

const deleteArtistByName = (name) => {
    return Artist.findByIdAndUpdate({name:name},{new:true})
};

const getArtistByName = (name) => {
    return Artist.findOne({name:name,is_active:true});
}

const getAllArtist = () => {
    return Artist.find()
};

module.exports {
    createArtist,
    updateArtistById,
    deleteArtistByName,
    updateArtistByName,
    getArtistByName,
    getAllArtist
}