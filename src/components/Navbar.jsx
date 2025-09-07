import React, { useContext } from 'react'
import logo from "./../../assets/logo ems.png"
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import httpAction from '../utils/httpAction'
import apis from '../api/apis'
import useProvideHooks from '../hooks/useProvider'
import toast from 'react-hot-toast'

const Navbar = () => {
  const { userData, setUserdata,setTasks } = useContext(AuthContext);
  const {navigate} = useProvideHooks(); 
  let role = "";
  if (userData) {
    role = userData.role;
  }

   
// const {navigate} = useProvideHooks();
  const logout = async () => {
    try {
      await httpAction({
        url: apis().logout,
        method: "POST",
        credentials: 'include'
      });

      setUserdata(null);
      setTasks([]); 
      toast.success("User Logged Out Succuessfully")
      navigate('/login')
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <nav className=" bg-[#1c1c1c] fixed w-full z-20 top-0 start-0  ">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-5 ">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-8" alt="Logo" />
        </Link>
        
        <div className='flex items-center justify-center gap-x-8'>
          
          {
            role == "employee" ? <Link to="/employeeDash" className='text-yellow-400'>Employee Dashboard</Link> :"" 
          }
          {
            role == "admin" ?<Link to="/adminDash" className='text-yellow-400'>Admin Dashboard</Link> :" "
          }
          {userData ? <button onClick={logout} className='hover:bg-gray-600 border px-3 py-1 rounded'>Logout</button> : <Link className='hover:bg-gray-600 border px-3 py-1 rounded' to="/login">Login</Link>}
        </div>


      </div>
    </nav>
  )
}

export default Navbar
