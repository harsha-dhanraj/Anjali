var express = require('express');
var router = express.Router();
//const User = require('../models/subscriber');
//const config = require('../config/database');
const Gateways = require('../models/gateway')
// var payload={
//     user:"abc",
//     password:"ab",
//     gateways:"rpi"
// }

router.get('/', function(req, res, next) {
    res.render('gateway', { title: 'Gateways' });
  });

router.post('/add', (req, res, next) => {
    var newGateway = req.body;
    console.log(newGateway);
    let gateway = new Gateways({
        metadata: {
            device_name: req.body.metadata.device_name,
            device_type: req.body.metadata.device_type,
            uAPI: req.body.metadata.uAPI
        },
        endNodes: req.body.endNodes
    })
    console.log(newGateway);
    Gateways.addGateways(gateway, (err, gateway) => {
        if (err) {
            console.error(err);
            res.json({
                success: false,
                msg: "Some Error"

            });
        } else {
            res.json({
                status: true,
                msg: "New Gateway added",
                gateway: gateway
            })
        }
    })
});

router.get('/find',( req,res,next)=>{
    var gateway = req.body;
    Gateways.getAllGateways((err, gateway)=>{
        //console.log(gateway);
        if (gateway.length == 0){
            res.json({
                status:false,
                msg:"Gateway does not exist"
            });
        }else{
            res.json({
                status:true,
                msg:gateway
            }); 
        }
    });
});

// router.put('/put',(req, res) => {
//     var userName = req.body;
//     console.log(userName);
//     var users=User.username;
//     console.log(users);
//     User.getUserById(users, (err, user)=>{
//         // if(users.length != 0){
//         //     res.json({
//         //         status : false,
//         //         msg: "User not found"
//         //     })
//         //}else
//         {
//             User.updateUser(userName, {}, (err, user) =>{
//                 if(err){
//                     comsole.error(err);
//                     res.json({
//                         success:false,
//                         msg:"user not found"
//                     });
//                 }else{
//                     res.json({
//                         success:true,
//                         msg:"user updated"
//                     });
//                 }
//             });
//         }
//     });

// });

module.exports = router;