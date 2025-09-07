import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import httpAction from '../../utils/httpAction';
import apis from '../../api/apis';
import toast from 'react-hot-toast';

const AcceptTask = ({data}) => {
     const { userData,setUserdata, setTasks, tasks} = useContext(AuthContext);
    
    const handleMarkAsCompleted = async () => {
        try {
            const response = await httpAction({
                url: apis().markAsCompleted,
                method: "POST",
                body: JSON.stringify({
                    taskId: data._id, // Task ID
                    employeeId: userData._id, // Employee ID
                }),
                credentials: "include",
            });
    
            if (response?.status) {
                toast.success("Task marked as completed!");
    
                // Update task status in context
                setTasks((prevTasks) => {
                    return prevTasks.map((task) => {
                        if (task._id === data._id) {
                            return { ...task, active: false, completed: true }; // ✅ Update completedTask
                        }
                        return task;
                    });
                });

                console.log(" after click on markAsComplete my updated task ", tasks)
    
                // Update user task counts
                setUserdata((prevUserData) => ({
                    ...prevUserData,
                    taskNumbers: {
                        ...prevUserData.taskNumbers,
                        active: (prevUserData.taskNumbers.active || 0) - 1, // ✅ Decrement active
                        completed: (prevUserData.taskNumbers.completed || 0) + 1, // ✅ Increment completed
                    },
                }));
                console.log(" after click on markAsComplete my updated user ", userData)
            } else {
                toast.error(response.message || "Failed to mark task as completed");
            }
        } catch (error) {
            console.error("Error marking task as completed:", error);
            toast.error("Something went wrong");
        }
    };

    const handleMarkAsFailed = async () => {
        try {
            const response = await httpAction({
                url: apis().markAsFailed,
                method: "POST",
                body: JSON.stringify({
                    taskId: data._id, // Task ID
                    employeeId: userData._id, // Employee ID
                }),
                credentials: "include",
            });
    
            if (response?.status) {
                toast.success("Task marked as failed!");
    
                // Update task status in context
                setTasks((prevTasks) => {
                    return prevTasks.map((task) => {
                        if (task._id === data._id) {
                            return { ...task, active: false, failed: true }; // ✅ Update failedTask
                        }
                        return task;
                    });
                });
    
                // Update user task counts
                setUserdata((prevUserData) => ({
                    ...prevUserData,
                    taskNumbers: {
                        ...prevUserData.taskNumbers,
                        active: (prevUserData.taskNumbers.active || 0) - 1, // ✅ Decrement active
                        failed: (prevUserData.taskNumbers.failed || 0) + 1, // ✅ Increment failed
                    },
                }));
            } else {
                toast.error(response.message || "Failed to mark task as failed");
            }
        } catch (error) {
            console.error("Error marking task as failed:", error);
            toast.error("Something went wrong");
        }
    };

    return (
       
        <div className='flex-shrink-0  p-5 h-full w-[330px] rounded-xl bg-orange-500 '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm py-1 px-3 rounded font-semibold'>{data.category}</h3>
                <h4 className='text-sm font-semibold'>{data.taskDate ? new Date(data.taskDate).toLocaleDateString() : ""}</h4>
            </div>
            <h1 className='text-xl mt-5 font-semibold '>{data.taskTitle}</h1>
            <p className='mt-2 text-base'>{data.taskDescription}</p>
            <div className='flex justify-between mt-4 '>
                <button onClick={handleMarkAsCompleted} className='bg-green-500 rounded py-1 px-2 text-sm'>mark as completed </button>
                <button onClick={handleMarkAsFailed} className='bg-red-500 rounded py-1 px-2 text-sm'>mark as failed</button>
            </div>
        </div>
    )
}

export default AcceptTask
