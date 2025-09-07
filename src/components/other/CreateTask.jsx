import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import httpAction from '../../utils/httpAction';
import apis from '../../api/apis';
import toast from 'react-hot-toast';

const CreateTask = ({ employees, setEmployees }) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskCategory, setTaskCategory] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [taskDesc, setTaskDesc] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            const response = await httpAction({
                url: apis().crateTask, // API endpoint
                method: "POST",
                body: JSON.stringify({
                    taskTitle,
                    taskDescription: taskDesc,
                    taskDate,
                    category: taskCategory,
                    employeeName: assignedTo,
                }),
                credentials: "include",
            });

            if (response?.status) {
                toast.success("Task assigned successfully!");

                // Update employee task count in UI
                setEmployees((prevEmployees) =>
                    prevEmployees.map((emp) =>
                        emp.name === assignedTo
                            ? { ...emp, taskNumbers: { ...emp.taskNumbers, newTask: emp.taskNumbers.newTask + 1 } }
                            : emp
                    )
                );

                // Clear input fields
                setTaskTitle('');
                setTaskDate('');
                setTaskCategory('');
                setAssignedTo('');
                setTaskDesc('');
            } else {
                toast.error(response.message || "Task assignment failed");
            }
        } catch (error) {
            console.error("Error assigning task:", error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="max-w-screen-xl flex items-center justify-between mx-auto ">
            <div className="w-full  rounded-lg shadow-lg border mt-10 border-gray-800">
                <div className="p-6 space-y-4 md:space-y-6">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                        Create a New Task
                    </h1>
                    <form
                        className="flex flex-col md:flex-row justify-between px-8"
                        onSubmit={(e) => {
                            handleSubmit(e);
                        }}
                    >
                        {/* Left Side */}
                        <div className="w-2/5 space-y-4">
                            <div>
                                <label
                                    htmlFor="taskTitle"
                                    className="block mb-2 text-sm font-medium text-white"
                                >
                                    Task Title
                                </label>
                                <input
                                    type="text"
                                    name="taskTitle"
                                    value={taskTitle}
                                    onChange={(e) => setTaskTitle(e.target.value)}
                                    className="bg-[#1c1c1c] border border-gray-600 text-white rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Task Title"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="taskDate"
                                    className="block mb-2 text-sm font-medium text-white"
                                >
                                    Date
                                </label>
                                <input
                                    type="date"
                                    name="taskDate"
                                    value={taskDate}
                                    onChange={(e) => setTaskDate(e.target.value)}
                                    className="bg-[#1c1c1c] border border-gray-600 text-white rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="taskCategory"
                                    className="block mb-2 text-sm font-medium text-white"
                                >
                                    Category
                                </label>
                                <input
                                    type="text"
                                    name="taskCategory"
                                    value={taskCategory}
                                    onChange={(e) => setTaskCategory(e.target.value)}
                                    className="bg-[#1c1c1c] border border-gray-600 text-white rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Category"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="assignedTo"
                                    className="block mb-2 text-sm font-medium text-white"
                                >
                                    Assigned To
                                </label>
                                <input
                                    type="text"
                                    name="assignedTo"
                                    value={assignedTo}
                                    onChange={(e) => setAssignedTo(e.target.value)}
                                    className="bg-[#1c1c1c] border border-gray-600 text-white rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Assigned To"
                                    required
                                />
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="w-2/5 space-y-4">
                            <div>
                                <label
                                    htmlFor="taskDesc"
                                    className="block mb-2 text-sm font-medium text-white"
                                >
                                    Task Description
                                </label>
                                <textarea
                                    name="taskDesc"
                                    rows="5"
                                    value={taskDesc}
                                    onChange={(e) => setTaskDesc(e.target.value)}
                                    className="bg-[#1c1c1c] border border-gray-600 text-white rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Enter task description here..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Create Task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default CreateTask;
