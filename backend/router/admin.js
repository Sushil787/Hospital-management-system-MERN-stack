const express = require("express");
const admin_router = express.Router();
const admin_contoller = require("../controller/admin");
const auth_middleware = require("../middleware/auth");
const role_check = require("../middleware/role");
admin_router.post("/doctor", auth_middleware, role_check, admin_contoller.add_doctor);
admin_router.delete("/doctor/:id", auth_middleware, role_check, admin_contoller.delete_doctor);
admin_router.get("/appointments", auth_middleware, role_check, admin_contoller.all_appointments);
admin_router.patch("/appointments", auth_middleware, role_check, admin_contoller.update_appointment);
admin_router.post("/payment", auth_middleware, role_check, admin_contoller.update_appointment);
admin_router.get("/userquery", auth_middleware, role_check,admin_contoller.user_query);
admin_router.get("/ambulance", auth_middleware, role_check,admin_contoller.ambulance_service);

admin_router.get("/single/:id",auth_middleware, role_check, admin_contoller.single_appointments);



module.exports = admin_router;