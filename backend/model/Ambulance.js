const mongoose = require('mongoose');

const ambulance_schema = mongoose.Schema({
    name: {
        type: String,
       
        required: true,
    },

    phoneNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true

    },
    city:{
        type:String,
        required:true

    },
    state:{
        type:String,
        required:true

    },
    zip:{
        type:String,
        required:true

    }, 

    emergencyType:{
        type:String,
        required:true

    }

});


const ambulance = mongoose.model("ambulance", ambulance_schema);
module.exports = ambulance;