const role_check = async(req, res, next)=>{
    admin_role = req.is_admin;
    if(admin_role == false ){
        return res.status(401).json({message: "un-authorized"});
    }
    next();
    return;
}
module.exports = role_check;