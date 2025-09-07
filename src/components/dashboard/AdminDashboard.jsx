import React, { useEffect, useState } from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';
import httpAction from '../../utils/httpAction';
import apis from '../../api/apis';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
    const [employees, setEmployees] = useState([]); // Store employee data

    // Fetch all employees (excluding admins) on component mount
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await httpAction({
                    url: apis().all_employees, // API to fetch employees
                    method: "GET",
                    credentials: "include",
                });

                if (response?.status) {
                    setEmployees(response.employees);
                } else {
                    toast.error(response.message || "Failed to fetch employees");
                }
            } catch (error) {
                console.error("Error fetching employees:", error);
                toast.error("Something went wrong");
            }
        };

        fetchEmployees();
    }, []);

    return (
        <div className='mt-20 px-10 h-screen'>
            <Header />
            <CreateTask employees={employees} setEmployees={setEmployees} />  
            <AllTask employees={employees} />
        </div>
    );
};

export default AdminDashboard;
