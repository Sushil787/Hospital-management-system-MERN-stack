const mongoose = require('mongoose');
const service_schema = mongoose.Schema({
    name:{
        type:String, 
        required:true,
    },
    features:{
        type:[String],
        required:true
    },
    image:{
        type:String,
        required:true
    }
});
const service = mongoose.model("service",service_schema);
module.exports = service;
