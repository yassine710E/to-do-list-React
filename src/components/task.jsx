import React, { useState,useContext } from 'react'
import { FaPen } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import ModifyTask from './modifyTask';
import { hookData } from '../pages/home';

function Task({ task_info }) {
  const hooks = useContext(hookData)
  const {deleteTask, modifyTask} = hooks
  const [modeUpdate, setModeUpdate] = useState(false)
 
       return !modeUpdate ? (
        <div className='rounded-md bg-blue-700 text-white p-3 flex my-2 w-[90%] m-auto'>
          <div className=' w-[80%]'>{task_info.task}</div>
          <button onClick={()=>{setModeUpdate(true)}} className=' w-[10%]'><FaPen /></button>
          <button className=' w-[10%]' onClick={()=>{deleteTask(task_info.id)}}><AiFillDelete /></button>
        </div>
      ) : (
    <ModifyTask task_info={task_info} modifyTask={modifyTask} setModeUpdate={setModeUpdate} />
    )}
    
  


export default Task
