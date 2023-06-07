const express = require("express");
const admin_router = express.Router();
const admin_contoller = require("../controller/admin");

admin_router.post("/doctor", admin_contoller.add_doctor);
admin_router.delete("/doctor",admin_contoller.delete_doctor);


module.exports = admin_router;