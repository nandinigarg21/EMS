import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const TaskListNumbers = () => {
  const {userData} = useContext(AuthContext); 
  
  return (
   <div className="max-w-screen-xl flex items-center justify-between mx-auto px-5 " >
     <div className='mt-10 flex flex-nowrap w-full justify-center gap-6'>
      <div className='w-[45%] bg-red-500 rounded-xl px-6 py-9 ' >
        <h1 className='text-3xl font-semibold'>{userData ? userData.taskNumbers.newTask : 0 }</h1>
        <h4 className='text-xl font-medium'>New Task</h4>
      </div>
      <div className='w-[45%] bg-blue-500 rounded-xl px-6 py-9 ' >
        <h1 className='text-3xl font-semibold'>{userData ? userData.taskNumbers.active : 0 }</h1>
        <h4 className='text-xl font-medium'>Active Task</h4>
      </div>
      <div className='w-[45%] bg-green-500 rounded-xl px-6 py-9 ' >
        <h1 className='text-3xl font-semibold'>{userData ? userData.taskNumbers.completed : 0 }</h1>
        <h4 className='text-xl font-medium'>Completed Task</h4>
      </div>
      <div className='w-[45%] bg-purple-500 rounded-xl px-6 py-9 ' >
        <h1 className='text-3xl font-semibold'>{userData ? userData.taskNumbers.failed : 0 }</h1>
        <h4 className='text-xl font-medium'>Failed Task</h4>
      </div>
    </div>
   </div>
  )
}

export default TaskListNumbers
