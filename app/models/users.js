const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');

const SALT_FACTOR = 10;

const Schema = mongoose.Schema

const UserSchema = new Schema({
    "name":{
        type:String
    },
    "email":{
        type:String,
        unique:true
    },
    "password":{
        type:String
    },
    "birth_date":{
        type:Date
    },
    "gender":{
        type:String,
        enum:["Male","Female"]
    },
    "is_active":{
        type:Boolean,
        default: true
    },
    "profile_image":{
        type:String
    }
},{ "collection": "users", "timestamps": true });


UserSchema.pre("save", function (next) {
	let user = this;
	if (!user.isModified("password")) { return next(); }
	bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
		if (err) return next(err);
		bcrypt.hash(user.password, salt,function (err, hash) {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	});

});

mongoose.Types.ObjectId.prototype.valueOf = function () {
	return this.toString();
};



module.exports = mongoose.model("users", UserSchema);