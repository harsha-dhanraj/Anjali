const mongoose = require('mongoose');
const config = require('../config/database');

const EndNodeSchema = mongoose.Schema({
  metadata: {
    d_name: {
      type: String,
      required: true
    },
    d_type: {
      type: String,
      required: true
    },
    uAPI: {
      type: String,
      required: true
    },
    dAPI:{
      type:String,
      required:true
    }
  },
  data: {
    type: Array,
    default: []
  },
  actuation: {
    type: Array,
    default: []
  }

});

const EndNode = module.exports = mongoose.model('EndNode', EndNodeSchema);
module.exports.getAllEndNodes = function (callback) {
  EndNode.find(callback);
}

module.exports.getEndNodeById = function (id, callback) {
    EndNode.findById(id, callback);
}

module.exports.getNodesByUAPI = function (uAPI, callback) {
    const query = {
        metadata:{
            uAPI:API
        }
    }
    EndNode.findOne(query, callback);
}

module.exports.getNodesByDAPI = function (dAPI, callback) {
    const query = {
        metadata :{
            dAPI:dAPI
        }
    }
    EndNode.findOne(query, callback);
}

module.exports.addEndNode = function (newEndNode, callback) {
    EndNode.create(newEndNode, callback);
  }


      
    
