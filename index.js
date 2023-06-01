const express = require("express");
const router = require("./router/router");
// const appRouterVerson1 = require("./router/V1.0/app_router");
// const appRouterVersion2 = require("./router/V1.1/app_router");
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
app.use(router);




// {
//     origin:"www.xyz.com",
//     methods:['GET','POST','PUT','DELETE'],
// }
