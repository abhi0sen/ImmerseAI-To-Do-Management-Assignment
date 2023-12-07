const jwt = require("jsonwebtoken")

const User = require("../models/User")

module.exports = async (req, res) => {
    const { username, password } = req.body

    const dbUser = await User.findOne({username}).exec()

    if (dbUser){
        if (password == dbUser.password){
            const token = jwt.sign({_id: dbUser._id, username: dbUser.username}, process.env.JWT_Login, {expiresIn: "1d"});
            res.json({
                message: "Login Successful",
                token
            })
        }
        else{
            res.status(400).send('Invalid Credentials')
        }
    } else{
        res.status(400).send("User doesn't exist")
    }
}