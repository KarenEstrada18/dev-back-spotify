const mongoose = require ('mongoose');

const Schema = mongoose.Schema

const ArtistSchema = new Schema({
    "name":{
        type:String,
        required:true
    },
    "biography":{
        type:String
    },
    "galery":{
        type:String
    },
    "albums":{
        type: Schema.Types.ObjectId,
		ref: "album"
    }

}, { "collection": "artists", "timestamps": true });


mongoose.Types.ObjectId.prototype.valueOf = function () {
	return this.toString();
};

module.exports = mongoose.model("artists", SubscriptionSchema);