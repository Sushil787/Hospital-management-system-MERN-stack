const role_check = async(req, res, next)=>{
    adminRole = req.is_admin;
    if(adminRole){
        next();
        return;
    }
   return res.status(401).json({message: "un-authorized"});

}

module.exports = role_check;