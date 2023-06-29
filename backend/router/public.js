const express = require("express");
const public_route = express.Router();
const {get_doctor,all_services,get_single_doctor} = require("../controller/public");
const auth_middleware = require("../middleware/auth");

public_route.get("/doctor", get_doctor);
public_route.get("/service", all_services);
public_route.get("/doctor/:id",auth_middleware, get_single_doctor);


module.exports = public_route;