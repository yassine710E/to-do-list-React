import React, { useState } from 'react'

function ModifyTask({ task_info, modifyTask, setModeUpdate }) {

  const [taskString, setTask] = useState(task_info.task)
  const updateHandler = ()=>{
    if (taskString) {
      modifyTask(task_info.id,taskString)
      setModeUpdate(false)
    }
  }
  return (
    <div className='border-2 border-blue-700 my-2  w-[90%] m-auto h-12 ' >
      <input type="text" className='w-[80%] h-full ' placeholder='  Enter the task' value={taskString} onChange={(e) => { setTask(e.target.value) }} />
      <button className='w-[20%] h-full bg-blue-700 text-white' onClick={updateHandler}>update Task</button>
    </div>
  )
}

export default ModifyTask
