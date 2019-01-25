const mongoose = require ('mongoose');

const Schema = mongoose.Schema

const AlbumSchema = new Schema({
    "name":{
        type:String,
        require:true
    },
    "album_cover":{
        type:String
    },
    "year":{
        type:Number
    },
    "songs":{
        type: Schema.Types.ObjectId,
		ref: "songs"
    }

    },{ "collection": "album", "timestamps": true });

    mongoose.Types.ObjectId.prototype.valueOf = function () {
        return this.toString();
    };
    
    module.exports = mongoose.model("album", SubscriptionSchema);