
const express = require("express");
const router = express.Router();
router.get("/",(req, res)=>{
   return res.render("index.ejs",{data:{"name":"sushil"}});

});
module.exports = router;