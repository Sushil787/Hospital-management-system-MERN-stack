const user = require('../model/user');
const jsonwebtoken = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const doctor = require('../model/doctor');

const { default: mongoose } = require('mongoose');

const signin = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username | !password) {
           return  res.status(202).json({ message: "incomplete content" });
        } else {
            auth_user = await user.findOne({ username });
            console.log(auth_user);
            console.log("hey....")
            if (!auth_user) {
                  return  res
                    .status(401)
                    .json({ message: `user with ${username} no found` });
            } else {
                const verify = await bcryptjs.compare(password, auth_user.password);
                if(!verify){
                    return res
            .status(401)
            .json({ message: "username or password incorrect" });
                }else{
                    const token = jsonwebtoken.sign({auth_user},process.env.SECRET_KEY,{expiresIn:"5h"} );
                    res.cookie("authorization", `Bearer ${token}`);
                    return res.status(200).json({ token:`Bearer ${token}`, user:auth_user,message:"login successfully"});
                }

            }
        }


    } catch (error) {
        res.status(500).json({ message: error.message });


    }


}

const doctorsignin = async (req, res) => {
  try {
      const { email, password } = req.body;
      console.log(email,password)
      if (!email | !password) {
         return  res.status(202).json({ message: "incomplete content" });
      } else {
          auth_user = await doctor.findOne({ email });
          console.log(auth_user);
          if (!auth_user) {
                return  res
                  .status(401)
                  .json({ message: `user with ${email} no found` });
          } else {
              const verify = await bcryptjs.compare(password, auth_user.password);
              if(!verify){
                  return res
          .status(401)
          .json({ message: "email or password incorrect" });
              }else{
                  const token = jsonwebtoken.sign({auth_user},process.env.SECRET_KEY,{expiresIn:"5h"} );
                  res.cookie("authorization", `Bearer ${token}`);
                  return res.status(200).json({ token:`Bearer ${token}`, user:auth_user});
              }

          }
      }


  } catch (error) {
      res.status(500).json({ message: error.message });


  }


}


const signup = async (req, res) => {
    try {
      const { username, password, email, gender, age, location, phone } =
        req.body;
      if (!username | !password | !email) {
        return res.status(204).json({ message: "incomplete content" });
      } else {
        const new_user = await user.findOne({ username, email });
        if (!new_user) {
          hashed_password = await bcryptjs.hash(password, 8);
          await user.create({
            username,
            password: hashed_password,
            email,
            gender,
            age,
            location,
            phone,
          });
          return res.status(200).json({ message: "user created" });
        } else {
          return res.status(409).json({ message: "user already exist" });
        }
      }
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  };
  
module.exports = {
    signin, signup,doctorsignin
}