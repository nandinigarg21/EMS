import React, { useContext } from "react";

import homeImg from '../../../assets/HomeImg.png'
import { AuthContext } from "../../context/AuthProvider";
import useProvideHooks from "../../hooks/useProvider";

const Home = () => {
  const {navigate} = useProvideHooks();
  const {userData} = useContext(AuthContext); 
  let role = "";
  if(userData){
    role = userData.role
  }
 

  



  const navigateToPage = ()=>{
    if(role == "admin"){
      navigate("/adminDash")
    }else{
      navigate("/employeeDash")
    }
  }

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="rounded-lg flex justify-around">
        {/* Left Side - Text & Button */}
        <div className="flex flex-col justify-center w-1/2 p-6 text-white">
          <h1 className="text-5xl font-bold mb-4">
            Keep Track of Your Work Easily !
          </h1>
          <p className="text-gray-400 mb-6 text-lg">
            Manage employees, track data, and stay on top of everything with ease.
          </p>
          {
            userData ? <button
            onClick={navigateToPage}
            className=" text-yellow-500 font-semibold py-2 px-5 rounded-lg transition-all"
          >
            Go to Dashboard
          </button> : <button
            onClick={() => navigate("/login")}
            className=" text-yellow-500 font-semibold py-2 px-5 rounded-lg transition-all"
          >
            Login to Continue
          </button>
          }
        </div>

        {/* Right Side - Image */}
        <div className=" flex justify-center items-center  w-1/3">
          <img
            src={homeImg}
            alt="Dashboard Illustration"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        
      </div>
    </div>
  );
};

export default Home;
