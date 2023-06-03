const user = require('../model/user');
const jsonwebtoken = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const { default: mongoose } = require('mongoose');

const signin = async (req, res) => {
    try {

    } catch (e) {
        return res.json({ message: e.message });
    }
}


const signup = async (req, res) => {
    const { username, password, email, is_admin } = req.body;
    if (!username || !password || !email || !is_admin) {
        return res.status(204).json({ message: "incomplete content" });
    }
    try {

    
    } catch (e) {
        /// 409 conflict
        return res.status(409).json({ message: e.message });
    }


}

module.exports = {
    signin, signup
}