// context/EmployeeProvider.js

import { createContext, useState } from 'react';
import axios from 'axios';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employeeData, setEmployeeData] = useState(null);
  const [allData, setAllData] = useState(null);


  const getEmployee = async (id) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/employees/${id}`);
      setEmployeeData(res.data); 
    } catch (error) {
      console.error('Error fetching employee:', error);
    }
  };

   const getAllEmployees = async () => {
      try {
        let res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admins/`);
res = res.data
        setAllData(res);



        
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <EmployeeContext.Provider
      value={{
        employeeData,
        setEmployeeData,
        allData,
        getAllEmployees,
      
        getEmployee, 
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
