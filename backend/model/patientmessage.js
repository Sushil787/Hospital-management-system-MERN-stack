const mongoose = require('mongoose');
const patient_query = mongoose.Schema({
    name:{
        type:String, 
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required: true
    }
});
const pquery = mongoose.model("patient_query",patient_query);
module.exports = pquery;
