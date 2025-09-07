import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import apis from '../../api/apis';
import httpAction from '../../utils/httpAction';
import toast from 'react-hot-toast';


const NewTask = ({data}) => {
    const { userData,setUserdata, setTasks, tasks} = useContext(AuthContext);

    // // Ensure tasks is an object and has the required properties
    // if (!tasks) return <div>Loading...</div>;  // Handle the case where tasks is undefined

    const handleAcceptTask = async () => {
        try {
            const response = await httpAction({
                url: apis().acceptTask,
                method: "POST",
                body: JSON.stringify({
                    taskId: data._id, // Task ID
                    employeeId: userData._id, // Employee ID
                }),
                credentials: "include",
            });
    
            if (response?.status) {
                toast.success("Task accepted successfully!");
    
                // Ensure task data is updated correctly
                setTasks((prevTasks) => {
                    return prevTasks.map((task) => {
                        if (task._id === data._id) {
                            return { ...task, active: true }; // ✅ Update activeTask
                        }
                        return task;
                    });
                });
                
                console.log(" after click on accept task my updated task ", tasks)
    
                // Ensure user task count is updated correctly
                setUserdata((prevUserData) => ({
                    ...prevUserData,
                    taskNumbers: {
                        ...prevUserData.taskNumbers,
                        active: (prevUserData.taskNumbers.active || 0) + 1, // ✅ Ensure increment
                    },
                }));
                console.log(" after click on accept task my updated user ", userData)
            } else {
                toast.error(response.message || "Failed to accept task");
            }
        } catch (error) {
            console.error("Error accepting task:", error);
            toast.error("Something went wrong");
        }
    };
    

    return (
        <div className="flex-shrink-0 p-5 h-full w-[330px] rounded-xl bg-orange-500 ">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm py-1 px-3 rounded font-semibold">
                    {data.category}
                </h3>
                <h4 className="text-sm font-semibold">
                    {data.taskDate ? new Date(data.taskDate).toLocaleDateString() : ""}
                </h4>
            </div>
            <h1 className="text-xl mt-5 font-semibold">
                {data.taskTitle}
            </h1>
            <p className="mt-2 text-base">
                {data.taskDescription }
            </p>
            <div className="mt-4 ">
                <button onClick={handleAcceptTask} className="bg-green-500 w-full rounded py-1 px-2 text-sm">
                    Accept Task
                </button>
            </div>
        </div>
    );
};

export default NewTask;
