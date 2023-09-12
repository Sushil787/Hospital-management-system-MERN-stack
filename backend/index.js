const express = require("express");
const admin_router = require("./router/admin");
const auth_router = require("./router/auth");
const public_router = require("./router/public");
const doctor_router = require("./router/doctor");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require('morgan');
require("dotenv").config();
const mongoose_connection = require("./db/connection");
const patient_router = require("./router/patient");
const doctor = require("./model/doctor");
const app = express();
app.use(cors({credentials: true, origin: true}));
mongoose_connection(app);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev')); // 'dev' is the predefined format for Morgan, you can also use other formats
app.use("/public",public_router);
app.use(auth_router);
app.use(admin_router);
app.use(patient_router);
app.use("/public",public_router)
app.use(doctor_router);

// {
//     origin:"www.xyz.com",
//     methods:['GET','POST','PUT','DELETE'],
// }
