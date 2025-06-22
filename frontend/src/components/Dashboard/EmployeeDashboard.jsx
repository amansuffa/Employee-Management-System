import React, { useState, useEffect, useContext } from 'react';
import Header from '../Other/Header';
import TaskNumbers from '../Other/TaskNumbers';
import AssignedTask from '../Task/AssignedTask';
import { useParams } from 'react-router-dom';
import { EmployeeContext } from '../../context/EmployeeProvider';
import SecHeader from '../Other/SecHeader';

const EmployeeDashboard = () => {
  const { id } = useParams();
  const {getEmployee} = useContext(EmployeeContext);
  
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem('loggedInUser')))


  useEffect(() => {
    getEmployee(id);
  }, []);


  return (
    <>
<div className='h-screen'>
<div className='sm:min-h-[20vh]'>
        <Header />
    { loggedInUser.role === 'admin' ? <SecHeader/>:''}
</div>
<div className='sm:min-h-[80vh] flex flex-col sm:justify-evenly'>
          <TaskNumbers />
      <AssignedTask />
</div>
</div>
    </>
  );
};

export default EmployeeDashboard;
