const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User schema

const UserSchema =mongoose.Schema ( {
    name: {type:String},
    username: { type:String,
                required:true},
    password: { type:String,
                required:true }
});

const User = module.exports = mongoose.model('User',UserSchema);

module.exports.getUserById = function(id,callback) {
    User.findById(id,callback);
};

module.exports.getUserByUsername = function(username,callback) {
    const query = {username:username};
    User.findOne(query,callback);
};

module.exports.getAllUsers = function(callback) {
    User.find({},callback);
};

module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) =>  {
        bcrypt.hash(newUser.password,salt,(err,hash) => {
            if(err) throw err;
            newUser.password=hash;
            newUser.save(callback);
        });
    });
};

module.exports.findAndDeleteUser = function(id,callback) {
    User.findByIdAndRemove(id,callback);

};

//only updatable fields are name and password at the moment, since the password is hashed and local storage does not store hashed password, need to go through a seperate change
module.exports.updateUser = function (user, changedPassword, callback) {
    
    if (changedPassword != null) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(changedPassword, salt, (err, hash) => {
                if (err) throw err;
                User.findByIdAndUpdate(user.id, { $set: { name: user.name,password:hash } }, callback);
            });
        });
    }
    else {
        User.findByIdAndUpdate(user.id, { $set: { name: user.name } }, callback);
    }

};

module.exports.comparePassword = function(candidatePassword,hash,callback) {
    bcrypt.compare(candidatePassword,hash, (err,isMatched) => {
        if(err) throw err;

        callback(null,isMatched);
    });
};