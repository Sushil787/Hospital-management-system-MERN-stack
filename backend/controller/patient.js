const appointments = require("../model/appointments");
const doctor = require("../model/doctor");
const user = require("../model/user");
const pquery = require("../model/patientmessage");

const axios = require("axios");

const user_query = async (req, res) => {
  try {
      const {name,email,contact,message} = req.body;
      await pquery.create({name, email,contact,message});
      return res.status(200).json({message:"Message Sent Successfully"});
    

  } catch (e) {
      return res.status(400).json({ message: e.message });
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
        return res.status(200).json({ message: "appintments created" });
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

// const payment_history = async(req,res)=>{

//       const { token, amount } = req.body;
//       const user=req.id
//       console.log(user)

//       try {

//       if (!user || !token || !amount) {
// return res.status(400).json({ message: 'Invalid payment request' });
//       }
//       let config = {
//         headers: {'Authorization': process.env.KHALTI_SECRET_KEY}
//       };

//       const khaltiResponse = await axios.post(
//         'https://khalti.com/api/v2/payment/verify/',
//         {
//           token,amount
//         },
//        config
//       );
//       console.log(khaltiResponse)

//       if (khaltiResponse.data && khaltiResponse.data.state === 'Completed') {

//         return res.status(200).json({ message: 'Payment successful' });
//       } else {

//         return res.status(400).json({ message: 'Payment failed or pending' });
//       }
//     } catch (error) {

//       console.error('Error verifying payment:', error);
//       return res.status(500).json({ message: 'Internal server error' });
//     }

// }

module.exports = { all_appointments, create_appointments, payment,user_query };
