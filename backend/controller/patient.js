const appointments = require('../model/appointments');
const doctor = require('../model/doctor');
const user = require('../model/user');


const all_appointments = async(req, res)=>{
    try{
        const id = req.id;
        if (!id) {
            return  res.status(202).json({ message: "incomplete content" });
         }else{
            const user_appointments = await appointments.find({user:id}).populate("doctor");
            if(!user_appointments){
                return  res
                .status(401)
                .json({ message: "no appointments found" });
            }else{
                return res.json({user_appointments});
            }
         }

    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

const create_appointments = async(req, res)=>{
    try{
        const { doctor, disease,date} = req.body;
        const user =  req.id;
        if (!user | !doctor |!disease | !date) {
            return  res.status(202).json({ message: "incomplete content" });
         }else{
            const user_appointments = await appointments.create({user, doctor, disease, date});
            if(user_appointments){
                return  res
                .status(200)
                .json({ message: "appintments created" });
            }else{
                return res.status(400).json({message:"error creating appointments"});
            }
         }
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}


module.exports = {all_appointments, create_appointments};