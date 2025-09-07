import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CompleteTask = ({data}) => {
       
        // Ensure tasks is an object and has the required properties
        if (!data) return <div>Loading...</div>;  // Handle the case where tasks is undefined
    
   
    return (
        // <div className='flex-shrink-0  p-5 h-full w-[330px] rounded-xl bg-orange-500 '>
        //     <div className='flex justify-between items-center'>
        //         <h3 className='bg-red-600 text-sm py-1 px-3 rounded font-semibold'>{data.category}</h3>
        //         <h4 className='text-sm font-semibold'>{data.taskDate}</h4>
        //     </div>
        //     <h1 className='text-xl mt-5 font-semibold '>{data.taskTitle}</h1>
        //     <p className='mt-2 text-base'>{data.taskDescription}</p>
        //     <div className='mt-4'>
        //         <button className='bg-green-500 w-full rounded py-1 px-2 text-sm'>Completed </button>
        //     </div>
        // </div>
        <div className='flex-shrink-0  p-5 h-full w-[330px] rounded-xl bg-orange-500 '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm py-1 px-3 rounded font-semibold'>{data.category}</h3>
                <h4 className='text-sm font-semibold'> {data.taskDate ? new Date(data.taskDate).toLocaleDateString() : ""}</h4>
            </div>
            <h1 className='text-xl mt-5 font-semibold '>{data.taskTitle}</h1>
            <p className='mt-2 text-base'>{data.taskDescription}</p>
            <div className='mt-4'>
                <button className='bg-green-500 w-full cursor-default rounded py-1 px-2 text-sm'>Completed</button>
            </div>
        </div>

    )
}

export default CompleteTask
