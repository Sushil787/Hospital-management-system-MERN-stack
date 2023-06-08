const jwt = require("jsonwebtoken");

const auth_middleware = async(req, res, next)=>{
    try {
        const token = req.headers["authorization"];
        console.log(token);
        const bearer = token.split(" ");
        const verify = jwt.verify(bearer[1], process.env.SECRET_KEY);
        if(verify){
            req.id = verify.auth_user._id;
            req.is_admin = verify.auth_user.is_admin;
            next();
            return;
        }else{
            return res.status(401).json({message: "un-authorized"});
        }
    } catch (error) {
        return res.status(500).json({message:error.message});        
    }
}

 module.exports = auth_middleware;






