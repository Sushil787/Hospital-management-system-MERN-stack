const express = require("express");
const doctor_router = express.Router();
const doctor_controller = require("../controller/doctor");
const auth_middleware = require("../middleware/auth");



doctor_router.get("/doctor-appointments",auth_middleware,doctor_controller.all_appointments)
doctor_router.get("/doctor-single",auth_middleware,doctor_controller.get_single_doctor)
doctor_router.patch("/doctor-update",auth_middleware,doctor_controller.update_doctor)
doctor_router.patch("/update-date",auth_middleware, doctor_controller.change_date);
doctor_router.patch("/update-medicine", auth_middleware,  doctor_controller.update_medicine);


module.exports=doctor_router;