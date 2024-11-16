const mongoose = require('mongoose')
// Defining the schema for a todo item
const todoSchema = new mongoose.Schema({
    task: String,
    done: {
        type:Boolean,
        default: false
    }
})
//Creating a mongoose model
const TodoModel = mongoose.model("todos", todoSchema)
module.exports = TodoModel
