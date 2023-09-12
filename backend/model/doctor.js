const mongoose = require('mongoose');
const doctor_schema = mongoose.Schema({
    name:{
        type:String, 
        default:"Dr. Ram Swami ayer",
        required:true,
    },
    expertise:{
        type:[String],
        required:true
    },
    image:{
        type:String,
        default:"https://img.freepik.com/premium-vector/doctor-surgeon-pharmacist-therapist-with-stethoscope-smiling-medic-worker-medical-staff_458444-338.jpg",
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    date:{
        type:[String],
        required:true
    },
    ammount:{
        type:Number,
        required:true

    },
    is_doctor:{
        type:Boolean,
        default:true
    }
    
});

// name, expertise, image,date,contact,email,password,desc,ammount



const doctor = mongoose.model("doctor",doctor_schema);
module.exports = doctor;


