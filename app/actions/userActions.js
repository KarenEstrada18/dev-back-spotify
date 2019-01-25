const User = require("../models/Users");

const createUser = (data) => {
	return User.create(data);
};

const getUserByEmail = (email) => {
	return User.findOne({email:email});
};

const getUserById = (id) => {
	return User.findOne({_id:id,is_active:true});
};

const getAllUsers = () => {
	return User.find({is_active:true});
};

const updateUserById = (id,data) =>{
	return User.findByIdAndUpdate(id,{$set:data},{new:true});
};

const deleteUserById =  (id)  => {
	return User.findByIdAndUpdate({_id:id,is_active:true},{$set:{is_active:false}},{new:true});
};


module.exports = {
	getAllUsers,
	createUser,
	getUserByEmail,
	getUserById,
	updateUserById
}