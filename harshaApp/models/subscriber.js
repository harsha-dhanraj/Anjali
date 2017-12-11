const mongoose = require('mongoose');

const subscriberSchema=mongoose.Schema({
username :{
    type:String,
    required:true
},
password :{
    type:String,
    required:true

},
gateways :{
    type:String,
    required:true
}

});
const User = module.exports = mongoose.model('subscribers', subscriberSchema);

module.exports.addUser = (newUser, callback) => {
    console.log(newUser);
    User.create(newUser, callback);
}

module.exports.getUser = (callback) => {
    User.find(callback);
}

module.exports.getUserById = (users, callback) => {
    User.findById(users, callback);
}

module.exports.updateUser = (user, options, callback) => {
    //var query = {user : user};
    var update = {
                username: User.users,
            };
            Events.findOneAndUpdate(query, update, options, callback);
};
    
module.exports = User;