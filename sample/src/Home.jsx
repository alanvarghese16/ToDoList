import React, { useEffect } from 'react'
import {useState} from 'react'
import Create from './Create'
import axios from 'axios'
import { BsFillCheckCircleFill, BsCircleFill, BsFillTrashFill } from 'react-icons/bs';

function Home() {
  const [todos, setTodos] = useState([])//state to hold the task
  useEffect(() => {
    axios.get('http://localhost:3001/get')
    .then(result => setTodos(result.data))
    .catch(err => console.log(err))
  },[])
  //Function to check a todo item
  const handleEdit = (id) => {
    axios.put('http://localhost:3001/update/'+id)
    .then(result => {
        window.location.reload()
    })
    .catch(err => console.log(err))
  }
// Function to delete a todo item
  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/delete/'+id)
    .then(result => {
        window.location.reload()
    })
    .catch(err => console.log(err)) 
  }
  return (
    <div className='home'>
        <h2>To Do List</h2>
        <Create />
        {
          todos.length===0 ?
          <div><h2>Add Your First Task, Let The Productivity Journey Begin.....</h2></div>
          :
          todos.map(todo=> ( //mapping through the todos to display them
            <div className='task'>
              <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                {todo.done ?
                <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill> 
                :<BsCircleFill className='icon'/>
            
                 }

                <p className={todo.done ? "line_through":""}>{todo.task}</p>
            </div>
            <div>
              <span><BsFillTrashFill className='icon'
               onClick={()=> handleDelete(todo._id)}/></span>
            </div>
          </div>  
          ))
        }
    </div>
  )
}

export default Home
