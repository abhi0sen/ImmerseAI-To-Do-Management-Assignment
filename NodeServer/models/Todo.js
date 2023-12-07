const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: [true, "Please enter User ID"]
    },
    title:{
        type: String,
        required: [true, "Please enter task title"]
    },
    description: {
        type:String,
    },
    date: {
        type: String,
        required: [true, "Please enter the date"],
    },
    completed: {
        type: Boolean,
        default: false
    }
});;

const Todo = mongoose.model("todo", todoSchema)

module.exports = Todo;