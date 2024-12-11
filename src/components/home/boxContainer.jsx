import React from 'react'
import AddTask from '../addTask'
import ListTasks from '../listTasks'

function BoxContainer() {
  return (
    <div className='bg-blue-900 p-8'>
      <h1 className='text-center my-5 text-5xl text-white'>Get Things Done !</h1>
      <AddTask />
      <ListTasks />
    </div>
  )
}

export default BoxContainer
