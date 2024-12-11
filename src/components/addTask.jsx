import React, { useContext, useState } from 'react'
import { hookData } from '../pages/home'
import { v4 } from 'uuid';
function AddTask() {
  // context API
  const hooks = useContext(hookData)
  const { addTask  } = hooks

  const [task, setTask] = useState("")

  const ButtonHandler = () => {
    if (task) {
      addTask({ id: v4(), task: task })
      setTask('')
      
    }

  }


  return (
    <div className='border-2 border-blue-700 w-[90%] m-auto h-10 '>
      <input type="text" className='w-[80%] h-full ' placeholder='  Enter the task' value={task} onChange={(e) => { setTask(e.target.value) }} />
      <button className='w-[20%] h-full bg-blue-700 text-white' onClick={ButtonHandler}>add Task</button>
    </div>
  )
}

export default AddTask
