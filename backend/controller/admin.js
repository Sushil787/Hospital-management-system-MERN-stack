const e = require("express");
const doctor = require("../model/doctor");
const mongoose = require("mongoose");

const add_doctor = async(req, res)=>{
    try{
        const {name, image, expertise} = req.body;
        if(!name || !image){
            return res.status(204).json({message:"incomplete content"});
        }else{
            const db_doctor = await doctor.findOne({name});
            if(!db_doctor){
                const new_doctor = await doctor.create({name, image, expertise});
                return res.json({message:"doctor added"});
            }
            return res.status(409).json({message:"doctor adlready exists"});
        }

    }catch(e){
        return res.status(400).json({message:e.message});
    }
}
const delete_doctor = async(req, res)=>{
    try{
        const {name, image} = req.body;
        if(!name || !image){
            return res.status(204).json({message:"incomplete content"});
        }else{
            const db_doctor = await doctor.findOne({name});
            if(db_doctor){
                const new_doctor = await doctor.deleteOne({name, image});
                return res.json({message:"doctor deleted"});
            }
            return res.status(404).json({message:"no doctor found found"});
        }

    }catch(e){
        return res.status(400).json({message:e.message});
    }
}




module.exports = {
    add_doctor,delete_doctor
};