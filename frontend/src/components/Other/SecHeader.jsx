import React from 'react'

import { useLocation , useNavigate} from 'react-router-dom';
const SecHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { employeeName } = location.state || {};

  const back = ()=>{
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  if (loggedInUser) {
    navigate(`/${loggedInUser.role}/${loggedInUser._id}`);
  }
  }
  
  return (
    <div className='px-4 sm:px-8 py-3 flex gap-2 w-full mb-3'>
        <h2 className='text-base sm:text-xl font-medium'>Employee: {employeeName}</h2>
         <button onClick={back} className='px-2 bg-gray-400 hover:bg-gray-500 rounded-md text-sm'>Back</button>
       
    </div>
  )
}

export default SecHeader