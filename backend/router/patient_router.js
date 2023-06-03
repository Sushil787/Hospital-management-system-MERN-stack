
const express = require("express");
const patient_router = express.Router();



patient_router.get("/",(req, res)=>{
  res.send("<h1> my name is sushil </h1>");

});
module.exports = patient_router;