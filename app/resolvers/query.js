const actions = require("../actions");

const user={
    name:'Karen',
    email:'',
    password:'',
    birth_date:'',
    is_active:true
}

const getTest = (_, args, context, info) => {
	return {...user};
};

const Users = (_, args, context, info) =>{
    return actions.getAllUsers().then(users => users)
        .catch(e => e);
};

const User = (_, args, context, info) => {
	return actions.getUserById(args.id).then((user) => {
		if (!user) throw new Error("User does not exist");
		return user;
	}).catch((e) => e);
};


module.exports = {
    getTest,
    Users,
    User
}