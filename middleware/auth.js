const jwt = require("jsonwebtoken");

const auth_middleware = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    console.log(token);
    const bearer = token.split(" ");
    const verify = jwt.verify(bearer[1], process.env.SECRET_KEY);
    // console.log(verify.auth_user._id);
    if (verify) {
      req.id = verify.auth_user._id;
      req.is_admin = verify.auth_user.isAdmin;
      next();
      return;
    }
    return res.status(401).json({ error: "uauthorized" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = auth_middleware;
