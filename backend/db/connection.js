const mongoose = require("mongoose");
const service=require('../model/service')


const PORT = 8080;



 mongoose_connection = async(app)=>{
  mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    
    console.log("db connected success");
     
    app.listen(PORT, "0.0.0.0",() => {
      console.log(`listening at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
 
 }
  module.exports = mongoose_connection;

