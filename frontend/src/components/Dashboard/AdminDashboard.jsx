import React from 'react'
import { useContext ,useEffect} from 'react';
import { EmployeeContext } from '../../context/EmployeeProvider';
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'
import CreateEmployee from '../Other/CreateEmployee';


const AdminDashboard = () => {

 const {getAllEmployees} = useContext(EmployeeContext);
 
  useEffect(() => {
   
   getAllEmployees();

  }, []);
  return (
    <>
    <Header/>
    <AllTask/>
    <CreateTask/>
    <CreateEmployee/>
    </>
  )
}

export default AdminDashboard