const express = require("express");
const patient_controller = require("../controller/patient");
const auth_middleware = require("../middleware/auth");
const patient_router = express.Router();
// const auth_middleware = require("../middleware/auth");
patient_router.get("/patient", auth_middleware,patient_controller.all_appointments );
patient_router.post("/patient/payment", auth_middleware, patient_controller.payment);
patient_router.post("/patient/appointment",auth_middleware,patient_controller.create_appointments);
patient_router.post("/patient/patientmessage", patient_controller.user_query);
patient_router.post("/patient/ambulance",patient_controller.ambulance_booking);
patient_router.get("/patient/single-appointment/:id",patient_controller.single_appointments);
patient_router.get("/userdetails",auth_middleware,patient_controller.single_user);
patient_router.put("/updatepatient",auth_middleware,patient_controller.update_user);

module.exports = patient_router;