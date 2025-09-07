import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
const AllTask = ({employees}) => {
  if(!employees){
    return <div>Loading...</div>
  }
  console.log(employees);
  const userData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

  return (
    // <div className='bg-[#1c1c1c] mt-5 p-5'>

    //   <div className='flex text-xl font-semibold rounded-md mb-2 px-4 py-3 bg-yellow-600 justify-between items-center '>
    //     <h2 className='w-1/5'>Employee Name</h2>
    //     <h2 className='w-1/5'>New Task</h2>
    //     <h2 className='w-1/5'>Active Task</h2>
    //     <h2 className='w-1/5'>Completed</h2>
    //     <h2 className='w-1/5'>Failed</h2>
    //   </div>


    //   <div>
    //     {userData.map((ele,idx)=>{
    //         return <div key={idx} className='flex text-xl  rounded-md mb-2 px-4 py-3 border-2 border-emerald-500 justify-between items-center '>
    //         <h2  className='w-1/5 '>{ele.firstName}</h2>
    //         <h2  className='w-1/5 text-purple-300'>{ele.taskNumbers.newTask}</h2>
    //         <h2  className='w-1/5 text-blue-400'>{ele.taskNumbers.active}</h2>
    //         <h2  className='w-1/5 text-yellow-400'>{ele.taskNumbers.completed}</h2>
    //         <h2  className='w-1/5 text-red-300'>{ele.taskNumbers.failed}</h2>


    //       </div>
    //     })}
    //   </div>


    // </div>
    <div className="max-w-screen-xl flex items-center justify-between mx-auto py-5 ">
      <div className='mt-5 py-5 w-full'>

        <div className='flex text-xl font-semibold rounded-md mb-2 px-4 py-3 bg-yellow-600 justify-between items-center '>
          <h2 className='w-1/5'>Employee Name</h2>
          <h2 className='w-1/5'>New Task</h2>
          <h2 className='w-1/5'>Active Task</h2>
          <h2 className='w-1/5'>Completed</h2>
          <h2 className='w-1/5'>Failed</h2>
        </div>


        <div>
          {employees.map((ele, idx) => {
            return <div key={idx} className='flex text-xl w-full rounded-md mb-2 px-4 py-3 border-2 border-emerald-500 justify-between items-center '>
              <h2 className='w-1/5 '>{ele.name}</h2>
              <h2 className='w-1/5 text-purple-300'>{ele.taskNumbers.newTask}</h2>
              <h2 className='w-1/5 text-blue-400'>{ele.taskNumbers.active}</h2>
              <h2 className='w-1/5 text-yellow-400'>{ele.taskNumbers.completed}</h2>
              <h2 className='w-1/5 text-red-300'>{ele.taskNumbers.failed}</h2>


            </div>
          })}
        </div>


      </div>
    </div>

  )
}

export default AllTask
