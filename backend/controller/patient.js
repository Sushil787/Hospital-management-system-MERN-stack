const appointments = require("../model/appointments");
const doctor = require("../model/doctor");
const user = require("../model/user");
const pquery = require("../model/patientmessage");
const ambulance=require("../model/Ambulance")

const axios = require("axios");
const bcryptjs = require("bcryptjs");

const user_query = async (req, res) => {
  try {
      const {name,email,contact,message} = req.body;
      await pquery.create({name, email,contact,message});
      return res.status(200).json({message:"Message Sent Successfully"});
    

  } catch (e) {
      return res.status(400).json({ message: e.message });
  }
}

const single_appointments = async (req, res) => {
  const {id} = req.params;
  console.log(id)
  try {
     

      // const validId = mongoose.Types.ObjectId.isValid(id);

      const appointment = await appointments.findById(id).populate("doctor").populate("user");
      console.log(appointment)

      if (!appointment) {
          return res
              .status(401)
              .json({ message: "no appointments found" });
      } else {
          return res.json({ appointment });
      }


  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}



const all_appointments = async (req, res) => {
  try {
    const id = req.id;
    if (!id) {
      return res.status(202).json({ message: "incomplete content" });
    } else {
      const user_appointments = await appointments
        .find({ user: id })
        .populate("doctor");
      if (!user_appointments) {
        return res.status(401).json({ message: "no appointments found" });
      } else {
        return res.json({ user_appointments });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const create_appointments = async (req, res) => {
  try {
    const { doctor, disease, date, status } = req.body;

    const user = req.id;

    if (!user | !doctor | !disease | !date) {
      return res.status(202).json({ message: "incomplete content" });
    } else {
      const user_appointments = await appointments.create({
        user,
        doctor,
        disease,
        date,
      });
      if (user_appointments) {
        return res.status(200).json({ message: "appointments created" });
      } else {
        return res.status(400).json({ message: "error creating appointments" });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const payment = async (req, res) => {
  const { status, _id } = req.body;
  
  console.log(_id, status);
  try {
    if (!_id | !status) {
      return res.status(400).json({ message: "Invalid payment request" });
    }
    await appointments.findByIdAndUpdate(
      { _id },
      { payment: status },
      
    );
    return res.status(200).json({ message: "paid successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

const ambulance_booking= async (req,res)=>{
 
  const {name,phoneNumber,address,emergencyType,city,state,zip}=req.body;
  console.log(name,phoneNumber,address,emergencyType)

  try {
    
    if(!name | !phoneNumber | !address | !emergencyType| !city | !state | !zip){
      return res.status(400).json({message:"invalid request"})
    }
  

      await ambulance.create({name,phoneNumber,address,emergencyType,city,state,zip});
      return res.status(200).json({message:"ambulance book successfully"});
  

   


  } catch (error) {
    return res.status(502).json({message:"internal problem"})

    
  }


}


const single_user=async(req,res)=>{
  const id=req.id
  console.log(id)
  try{
      const data=await user.findById(id)
      if(!data)
      {
        return res.status(401).json({
          message:"cannot find user"
         
        })
      }

      return  res.status(202).json({
        message:"find user successfully",
        data:data

      })

  }
  catch(e){
    return res.status(400).json({message:e.message})
  }
}

const update_user=async(req,res)=>{
  const id=req.id
  console.log(id)
  let {username,email,password,phone,gender,age,location}=req.body;
  console.log(username,email,password,phone,gender,age,location)
  let updateobject={}

  if (password) { 
    password = await bcryptjs.hash(password, 10);
     updateobject={username,email,password,phone,gender,age,location}
  }
  else{
    updateobject={username,email,phone,gender ,age,location}


  }


  try{
    if(!username | !email  | ! phone | !gender | !age | !location){
      return res.status(400).json({message:"invalid request"})
    }

    const data=await user.findById(id)
   


   
    if(!data)
    {
      return res.status(401).json({
        message:"cannot find user"
       
      })
    }
    else
    {
      
      

      const updateduser= await user.findByIdAndUpdate(id, updateobject)
      
    

    return res.status(202).json({
      message:"update successfully",
      data:updateduser
    })
  }
  }
  catch(e){
    return res.status(400).json({message:e.message})
  }
}


  




module.exports = { all_appointments, create_appointments, payment,user_query,ambulance_booking,single_appointments,single_user,update_user };
