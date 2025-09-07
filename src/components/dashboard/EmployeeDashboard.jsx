import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../tasklist/TaskList'

const EmployeeDashboard = () => {
  
  return (
    // <div>
    //   <h1>Employee Dashborad</h1>
    // </div>
    
    <div className='mt-20 px-10 h-[100%]'>
        <Header />
        <TaskListNumbers  />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard
