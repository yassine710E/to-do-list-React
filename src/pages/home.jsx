import React, { createContext } from 'react'
import BoxContainer from '../components/home/boxContainer'
import UseTask from '../hooks/useTask'
export const  hookData = createContext() 

export default function Home() {
  const { tasks, addTask, deleteTask, modifyTask } = UseTask()
  return (
    <div className='w-[50%]' >
      <hookData.Provider value={{ tasks, addTask, deleteTask, modifyTask }}>
      <BoxContainer />
      </hookData.Provider>
      
    </div>
  )
}
