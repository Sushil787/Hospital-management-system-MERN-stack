const express = require("express");
const public_route = express.Router();
const {get_doctor,all_services} = require("../controller/public");

public_route.get("/doctor", get_doctor);
public_route.get("/service", all_services);


module.exports = public_route;