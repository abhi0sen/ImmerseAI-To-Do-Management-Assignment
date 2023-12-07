const bcrypt = require("bcrypt")
const {isEmail} = require("validator")
const User = require("../models/User")

const saltRounds = 10
const validateSignUpData = async(req, res) => {
    const {name, email, password} = req.body;
    if(name.trim().length === 0){
        res.status(400).json({message: "Name cannot be empty"})
        return false;
    }
    if(!isEmail(email)){
        res.status(400).json({message: "Invalid Email Address"})
        return false
    }
    if(password.trim().length < 8 || password.trim().length > 256){
        res.status(400).json({message: "Password must be between 8 and 256 characters long"})
    } else if(password.trim().length <= 5){
        res.status(400).json({message: "Password is too short"})
        return false;
    }

    const existingUser = await User.findOne({email}).exec()

    if(existingUser){
        res.status(409).json({message: "This email address has already been registered."});
        return false;
    }

    return true;
};

module.exports = async(req, res) => {
    const {name, email, password} = req.body;
    const isValid = await validateSignUpData(req, res)
    if(isValid){
        try{
            const hashedPw = await bcrypt.hashSync(password, saltRounds);
            const user = await User.create(name, email, hashedPw)
            res.json({
                message: "Account Created Successfully",
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }
            })
        } catch(err){
            console.log(err)
        }
    }
}