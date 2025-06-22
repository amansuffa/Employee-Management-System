import React, { useContext , useEffect} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import axios from 'axios';
import Privateroute from './components/Auth/PrivateRoute';

import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';


const App = () => {
  const navigate = useNavigate();


  useEffect(() => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  if (loggedInUser) {
    navigate(`/${loggedInUser.role}/${loggedInUser._id}`);
  }
}, []);


const handleLogin = async (email, password) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
      email,
      password,
    });
    
    const data = res.data;

    localStorage.setItem('loggedInUser', JSON.stringify(data));
    navigate(`/${data.role}/${data._id}`); 
      
      
    } catch (error) {
      if (error.response) {
        // alert(error.response.data.message || 'Invalid Credentials');
              toast.error('Invalid Credentials');
            } else {
              console.error('Login Error:', error);
              // alert('Server Error');
              toast.error('Server Error');
      }
    }
  };

  return (
    <>
          <Toaster position="bottom-right" reverseOrder={false} />

    <Routes>
      <Route path='/' element={<Login handleLogin={handleLogin} />} />
      <Route element={<Privateroute />}>
        <Route path='/admin/:id' element={<AdminDashboard />} />
        <Route path='/employee/:id' element={<EmployeeDashboard />} />
      </Route>
    </Routes>
    </>
  );
};

export default App;
