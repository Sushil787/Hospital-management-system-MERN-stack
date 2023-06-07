const doctor = require("../model/doctor");


const get_doctor= async(req, res)=>{
    try{
        const doctors = await doctor.find();
        return res.status(200).json({doctors});
    }catch(e){
        return res.status(400).json({message:e.message});
    }
}

module.exports = get_doctor;