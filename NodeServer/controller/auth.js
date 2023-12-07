const jwt = require("jsonwebtoken")

module.exports = (req, res) => {
    const {token} = req.body

    if(token){
        try{
            var decodedToken = jwt.verify(token, process.env.JWT_Login);

            res.json({
                auth: true,
                data: decodedToken
            })
        }catch (err) { 
            res.json({
                auth: false,
                data: err.message,
            })
        }
    } else {
        res.json({
            auth: false,
            data: "No token Found",
        })
    }
}