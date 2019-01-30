const User = require("../models/Users");

const createUser = (data) => {
	return User.create(data);
};

const getUserByEmail = (email) => {
	return User.findOne({email:email});
};

const getUserByName = (name) => {
	return User.findOne({name:name,is_active:true});
};

const getAllUsers = () => {
	return User.find({is_active:true});
};

const updateUserByName = (name,data) =>{
	return User.findByIdAndUpdate(name,{$set:data},{new:true});
};

const deleteUserByName =  (name)  => {
	return User.findByIdAndUpdate({name:name,is_active:true},{$set:{is_active:false}},{new:true});
};


module.exports = {
	getAllUsers,
	createUser,
	getUserByEmail,
	getUserByName,
	updateUserByName,
	deleteUserByName
}