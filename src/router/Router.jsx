import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../components/other/Home'
import Login from '../components/Auth/Login'
import Signup from '../components/Auth/Signup'
import EmployeeDashboard from '../components/dashboard/EmployeeDashboard'
import AdminDashboard from '../components/dashboard/AdminDashboard'
const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signup",
                element:<Signup/>
            },
            {
                path:"/employeeDash",
                element:<EmployeeDashboard/>
            },
            {
                path:"/adminDash",
                element:<AdminDashboard/>
            }
        ]
    }
])

export default Router; 