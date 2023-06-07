const express = require("express");
const admin_router = express.Router();
const admin_contoller = require("../controller/admin");
const auth_controller = require("../controller/auth");
const auth_middleware = require("../middleware/auth");
const role_check = require("../middleware/role");
admin_router.post("/doctor",auth_middleware,role_check,admin_contoller.add_doctor);
admin_router.delete("/doctor",auth_middleware,role_check,admin_contoller.delete_doctor);

module.exports = admin_router;
