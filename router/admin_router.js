const express = require("express");
const admin_router = express.Router();
const auth_middleware = require("../middleware/auth");
const auth_controller = require("../controller/auth");
const role_check = require("../middleware/role");
admin_router.get("/login",auth_middleware,role_check, auth_controller.signin);

module.exports = admin_router;