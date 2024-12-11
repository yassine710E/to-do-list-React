import React,{ useContext } from 'react'
import Task from './task'
import { hookData } from '../pages/home'



function ListTasks() {
    const hooks = useContext(hookData)
    const {tasks} = hooks
    return (
        <div  >
         {tasks.map((item)=>(
            <Task task_info={item} />
         ))}
        </div>
    )
}

export default ListTasks
