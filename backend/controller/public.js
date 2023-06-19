const doctor = require("../model/doctor");
const service = require("../model/service");


const get_doctor= async(req, res)=>{
    try{
        const doctors = await doctor.find();
        return res.status(200).json({doctors});
    }catch(e){
        return res.status(400).json({message:e.message});
    }
}



const all_services = async (req, res) => {
    try {
      
        const user_service = await service
          .find()
          return res.status(200).json({user_service});
          
        
      }
    catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  

module.exports ={all_services,get_doctor} 