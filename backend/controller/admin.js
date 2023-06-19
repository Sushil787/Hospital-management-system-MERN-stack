const e = require("express");
const doctor = require("../model/doctor");
const mongoose = require("mongoose");
const appointments = require("../model/appointments");

const add_doctor = async (req, res) => {
    try {
        const { name, expertise, image } = req.body;
        console.log(name, expertise, image);
        if (!name | !image) {
            return res.status(204).json({ message: "incomplete content" });
        } else {
            const db_doctor = await doctor.findOne({ name });
            if (!db_doctor) {
                await doctor.create({ name, image, expertise });
                return res.json({ message: "doctor added" });
            }
            return res.status(409).json({ message: "doctor adlready exists" });
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

        const all_appointments = await appointments.find({}).populate("doctor");
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







module.exports = {
    add_doctor, delete_doctor, all_appointments, update_appointment
};