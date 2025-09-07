import React, { createContext, useEffect, useState } from 'react';
import httpAction from '../utils/httpAction';
import apis from '../api/apis';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserdata] = useState(null);
  const [tasks, setTasks] = useState([]);

  // Fetch User Data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await httpAction({
          url: apis().getUserDetails,
          method: "GET",
        });

        if (response?.status) {
          setUserdata(response.user);
        } else {
          console.log("No user found");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  // Fetch Tasks when userData is available
  useEffect(() => {
    if (userData?._id) {
      fetchTasks(userData._id);
    }
  }, [userData]);

  const fetchTasks = async (employeeId) => {
    try {
      const response = await httpAction({
        url: `${apis().getTasks}/${employeeId}`,
        method: 'GET',
      });

      if (response?.status) {
        setTasks(response.tasks);
      } else {
        setTasks([]);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks([]);
    }
  };

  return (
    <AuthContext.Provider value={{ userData, setUserdata, tasks, setTasks }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
