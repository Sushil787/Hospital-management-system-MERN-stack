const user = require('../model/user');
const jsonwebtoken = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const { default: mongoose } = require('mongoose');

const signin = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username | !password) {
            return res.status(204).json({ message: "incomplete content" });
        } else {
            auth_user = await user.findOne({ username });
            if (!auth_user) {
                return res
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

                    return res.status(200).json({ json:`Bearer ${token}`});
                }

            }
        }


    } catch (error) {
        res.status(500).json({ message: error.message });


    }


}


const signup = async (req, res) => {
    try {
        const { username, password, email, is_admin } = req.body;
        if (!username | !password | !email | is_admin === undefined) {
            return res.status(204).json({ message: "incomplete content" });
        } else {
            const new_user = await user.findOne({ username, email });
            if (!new_user) {
                hashed_password = await bcryptjs.hash(password, 8);
                await user.create({ username, password: hashed_password, email, is_admin });
                return res.status(200).json("user created");
            } else {
                return res.status(202).json("user already exists");
            }

        }

    } catch (e) {
        return res.status(500).json({ message: e.message });
    }


}

module.exports = {
    signin, signup
}