const express = require("express");
const patient_controller = require("../controller/patient");
const auth_middleware = require("../middleware/auth");
const patient_router = express.Router();
// const auth_middleware = require("../middleware/auth");
patient_router.get("/patient", auth_middleware,patient_controller.all_appointments );
patient_router.post("/patient/appointment",auth_middleware,patient_controller.create_appointments);
patient_router.post("/patient/appointment/payment", auth_middleware,patient_controller.payment_history );

module.exports = patient_router;