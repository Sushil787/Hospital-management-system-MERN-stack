
const doctor = require("../model/doctor");
const mongoose = require("mongoose");
const appointments = require("../model/appointments");
const pquery = require("../model/patientmessage");
const ambulance = require("../model/Ambulance")
const bcryptjs = require('bcryptjs');
const add_doctor = async (req, res) => {
    try {
        const { name, expertise, image,date,email,password,desc,contact,ammount} = req.body;
        console.log(name, expertise, image,date,email,password,desc,contact,ammount);
        if (!name | !image | !expertise | !date | !email | !password | !desc | !contact | !ammount) {
            return res.status(204).json({ message: "incomplete content" });
        } else {
            const db_doctor = await doctor.findOne({ name,email });
            if (!db_doctor) {
                const hashed_password = await bcryptjs.hash(password, 8);
                await doctor.create({ name, image, expertise, date, email, password:hashed_password, desc, contact ,ammount});
                return res.status(200).json({ message: "doctor added" });
            }
            return res.status(409).json({ message: "doctor already exists" });
        }

    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
}

const delete_doctor = async (req, res) => {
    try {
        const _id = req.params.id;

        if (!_id) {
            return res.status(204).json({ message: "no id sent" });
        } else {
            const db_doctor = await doctor.findOne({ _id });
            if (db_doctor) {
                await doctor.deleteOne({ _id });
                return res.json({ message: "doctor deleted" });
            }
            return res.status(404).json({ message: "no doctor found found" });
        }

    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
}
const user_query = async (req, res) => {
    try {
        const allQuery = await pquery.find({}).select("-__v ");
        return res.status(200).json(allQuery);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}




const ambulance_service = async (req, res) => {
    try {
        const get_ambulance = await ambulance.find({}).select("-__v ");
        return res.status(200).json(get_ambulance);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

const update_appointment = async (req, res) => {
    try {
        const { _id, status, invoice } = req.body;
        if (!_id | !status | !invoice) {
            return res.status(202).json({ message: "incomplete-content" });
        } else {
            const appointment = await appointments.findOne({ _id });
            if (!appointment) {
                return res.status(401).json({ message: "no appointment exist" });
            } else {
                await appointments.findByIdAndUpdate({ _id }, { status, invoice });
                return res.status(200).json({ message: "appointment updated" });
            }

        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}



const all_appointments = async (req, res) => {
    
  
    try {

        const all_appointments = await appointments.find().populate("user").populate("doctor");
        console.log(all_appointments)
        if (!all_appointments) {
            return res
                .status(401)
                .json({ message: "no appointments found" });
        } else {
            return res.json({ all_appointments });
        }


    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}



const single_appointments = async (req, res) => {
    try {
        const {id} = req.params;
        console.log(id)

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







module.exports = {
    add_doctor, delete_doctor, all_appointments, update_appointment, user_query, ambulance_service,single_appointments
};