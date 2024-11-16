import React from 'react'
import {useState} from 'react'
import axios from 'axios'

function Create() {
    const [task,setTask] = useState()//State to hold the value of knew task
    const handleAdd = () =>{
      // Sending a POST request to the server to add the new task
        axios.post('http://localhost:3001/add', {task: task})
         .then(result =>
            { window.location.reload()

        })
        .catch(err=> console.log(err))
    }
  return (
    <div className='Edit'>
      <form>
      < input type="text" className='input' placeholder='Enter Task' onChange={(e) => setTask(e.target.value) }/>
      <button type="button" className='Add' onClick={handleAdd}>Add</button>
      </form>
    </div>
  )
}

export default Create
