const express = require("express");
const patient_controller = require("../controller/patient");
const role_check = require("../middleware/role");
const auth_middleware = require("../middleware/auth");
const patient_router = express.Router();
// const auth_middleware = require("../middleware/auth");
patient_router.get("/patient/:id", auth_middleware, role_check,patient_controller.all_appointments );
patient_router.post("/patient/appointment",auth_middleware,role_check,patient_controller.create_appointments);

module.exports = patient_router;