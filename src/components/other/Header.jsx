import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Header = () => {
  const {userData} = useContext(AuthContext);
  let name = ""; 
  let role = ""; 
  if(userData){
    name = userData.name
    role = userData.role
  }
  return (
    <div>
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-5 ">
            <h1 className='text-xl font-semibold'>Hello <span className='text-2xl'>{name} !</span> {role == "admin" ? <span className='text-xl text-blue-400'>Give Task To Employees</span>: <span className='text-xl text-blue-400'>Complete your Work </span> }</h1>
        </div>
    </div>
  )
}

export default Header
