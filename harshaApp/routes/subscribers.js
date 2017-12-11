var express = require('express');
var router = express.Router();
const User = require('../models/subscriber');
const config = require('../config/database');

// var payload={
//     user:"abc",
//     password:"ab",
//     gateways:"rpi"
// }

router.post('/', (req, res, next) => {
    var newUser = req.body;
    //console.log(newUser);
    User.addUser(newUser, (err, user) => {
        //console.log("user");
        if (err) {
            console.error(err);
            res.json({
                success: false,
                msg: "Some Error",

            });

        } else {
            res.json({
                sucess: true,
                msg: "New User Added...",
                user: user
            });
        }


    });
});

router.get('/find',( req,res,next)=>{
    var user = req.body;
    User.getUser((err, user)=>{
        //console.log(user);
        if (user.length == 0){
            res.json({
                status:false,
                msg:"User does not exist"
            });
        }else{
            res.json({
                status:true,
                msg:user
            }); 
        }
    });
});

router.put('/put',(req, res) => {
    var userName = req.body;
    console.log(userName);
    var users=User.username;
    console.log(users);
    User.getUserById(users, (err, user)=>{
        // if(users.length != 0){
        //     res.json({
        //         status : false,
        //         msg: "User not found"
        //     })
        //}else
        {
            User.updateUser(userName, {}, (err, user) =>{
                if(err){
                    comsole.error(err);
                    res.json({
                        success:false,
                        msg:"user not found"
                    });
                }else{
                    res.json({
                        success:true,
                        msg:"user updated"
                    });
                }
            });
        }
    });

});

module.exports = router;