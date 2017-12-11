const mongoose = require('mongoose');
const config = require('../config/database')
const GatewaySchema=mongoose.Schema({
metadata:
    {
        device_type:{
            type:String,
            required:true
        },
        device_name :{
            type:String,
            required:true

        },
        uAPI :{
            type:String,
            required:true
        }
    },
    endNodes:{
        type:Array,
        default:[]
    }

});
const Gateway = module.exports = mongoose.model('Gateway', GatewaySchema);

module.exports.getAllGateways = (callback) => {
    Gateway.find(callback);
}

module.exports.getGatewayById = (id, callback) => {
    Gateway.findById(id, callback);
}

module.exports.getGatewaysByUAPI = (uAPI, callback) => {
    //var query = {user : user};
    var update = {
                uAPI: uAPI,
            };
            GatewaySchema.find(query, callback)
};
    
module.exports.addGateways = function (newGateway, callback) {
    console.log(newGateway)
    Gateway.create(newGateway, callback);
  }