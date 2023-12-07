const {Router} = require("express")
const signup = require("../controller/signup")

const router = Router()

router.post("/signup", signup)

module.exports = router 