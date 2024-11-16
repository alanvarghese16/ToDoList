const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')
const app = express()

app.use(cors())
app.use(express.json())

//Connecting to the MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/test')

// Route to get all todos
app.get('/get',(req, res) =>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// Route to update a todo item 
app.put('/update/:id',(req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id: id},{done: true})
    .then(result =>res.json(result))
    .catch(err => res.json(err))
})

// Route to delete a todo item 
app.delete('/delete/:id',(req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id: id})
    .then(result =>res.json(result))
    .catch(err => res.json(err))
})

// Route to add a new todo item
app.post('/add',(req, res) =>{ 
      const task = req.body.task;
      TodoModel.create({
        task: task
      }).then(result => res.json(result))
      .catch(err => res.json(err))

})

// Starting the server and listening on port 3001
app.listen(3001, ()=> {
    console.log("Server is running")
})