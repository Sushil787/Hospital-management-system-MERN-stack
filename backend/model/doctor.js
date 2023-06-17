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
    }
});





const doctor = mongoose.model("doctor",doctor_schema);
module.exports = doctor;


