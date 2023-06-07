const express = require("express");
const public_route = express.Router();
const get_doctor = require("../controller/public");

public_route.get("/doctor", get_doctor);


module.exports = public_route;