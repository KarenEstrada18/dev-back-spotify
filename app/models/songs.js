const mongoose = require ('mongoose');

const Schema = mongoose.Schema

const SongSchema = new Schema({
    "name":{
        type:String
    },
    "artist":{
        type: Schema.Types.ObjectId,
		ref: "artists"
    },
    "album_cover":{
        type:[Schema.Types.ObjectId],
        ref:"album"
    },
    "duration":{
        type:String
    },
    "url":{
        type:String
    }
}, { "collection": "songs", "timestamps": true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
	return this.toString();
};

module.exports = mongoose.model("songs", SongSchema);