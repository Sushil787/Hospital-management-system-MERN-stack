const express = require("express");
const patient_router = require("./router/patient_router");

const cors = require("cors");
const morgan = require('morgan');
require("dotenv").config();
const mongoose_connection = require("./db/connection");
const app = express();
app.use(cors())
mongoose_connection(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev')); // 'dev' is the predefined format for Morgan, you can also use other formats
app.use(patient_router);

// {
//     origin:"www.xyz.com",
//     methods:['GET','POST','PUT','DELETE'],
// }
