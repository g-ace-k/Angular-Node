const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');

router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    });

    //check for duplicate username
    User.getUserByUsername(newUser.username, (err, user) => {
        if (err) throw err
        if (!user) {
            //If username not found, register user
            User.addUser(newUser, (err, user) => {
                if (err) {
                    res.json({ success: false, msg: 'Failed to register user' });
                }
                else {
                    res.json({ success: true, msg: 'User registered' });
                }
            });
        }
        else {
            res.json({success: false, msg: 'Username taken'});
        }
    });

});

router.get('/login', (req, res, next) => {
    res.send("LOGIN");
});

router.get('/allUsers', passport.authenticate('jwt', { session: false }),(req,res,next) => {
    User.getAllUsers((err,users) => {
        if(err) throw err;

        if(!users) {
            return res.json({ success: false, msg: "Users not found"});
        }
        else {
            res.send(users);
        }
    });

});

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => { //Protected route, requires login
    res.json({ user: req.user });
});

router.delete('/delete/:id', passport.authenticate('jwt', { session: false }),(req,res,next) => {
    User.findAndDeleteUser(req.params.id, (err,user) => {
        if(err) throw err;
        
        if(!user) {
            return res.json({ success: false, msg: "User not found"});
        }
        else {
            return res.json({ success: true, msg: "User deleted"});
        }
    });
    
});

router.post('/updateUser',  (req, res, next) => { 
    const user=req.body;
    const changedPassword=req.body.password;

    User.updateUser(user,changedPassword, (err, user) => {
        if(err) throw err;

        if(!user) {
            return res.json({ success: false, msg: "User not found"});
        }
        else {
            return res.json({ success: true, msg: "Saved Changes"});
        }
    }); 

    
});

router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;

        if (!user) {
            return res.json({ success: false, msg: "User not found" });
        }

        User.comparePassword(password, user.password, (err, isMatched) => {
            if (err) throw err;
            
            if (isMatched) {
                const token = jwt.sign(user.toObject(), config.secret, { expiresIn: 604800 }); //expires in a week
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: { //Different json from query so it doesn't send back password
                        id: user._id,
                        name: user.name,
                        username: user.username
                    }
                });
            }
            else {
                return res.json({ success: false, msg: "Wrong password" });
            }
        });
    });
});

module.exports = router;