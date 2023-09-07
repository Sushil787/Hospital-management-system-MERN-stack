const mongoose = require('mongoose');

const ambulance_schema = mongoose.Schema({
    name: {
        type: String,
       
        required: true,
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true

    },
    accident_type:{
        type:String,
        required:true

    }

});


const ambulance = mongoose.model("ambulance", ambulance_schema);
module.exports = ambulance;