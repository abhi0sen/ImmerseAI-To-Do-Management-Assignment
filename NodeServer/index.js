const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// MIDDLEWARE
app.use(cors())
app.use(express.json())

try{
    // DB CONNECTION
    mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected")
} catch(err){
    console.log(err)
}

const user = require("./routes/user");
const todo = require("./routes/todos")
const api = require("./routes/authRoute")
app.use('/user', user)
app.use('/todo', todo)
app.use('/api', api)


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})