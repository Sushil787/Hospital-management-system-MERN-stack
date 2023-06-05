const express = require("express");
const admin_router = require("./router/admin_router");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require('morgan');
require("dotenv").config();
const mongoose_connection = require("./db/connection");
const patient_router = require("./router/patient_router");
const app = express();
app.use(cors({credentials: true, origin: true}));
mongoose_connection(app);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev')); // 'dev' is the predefined format for Morgan, you can also use other formats
app.use(admin_router);
app.use(patient_router);

// {
//     origin:"www.xyz.com",
//     methods:['GET','POST','PUT','DELETE'],
// }
