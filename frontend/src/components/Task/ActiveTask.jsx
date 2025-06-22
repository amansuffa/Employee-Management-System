import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { EmployeeContext } from '../../context/EmployeeProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Trash2 } from 'lucide-react'; // Bin icon

const ActiveTask = ({ e, i }) => {
  const { id } = useParams();
  const { getEmployee } = useContext(EmployeeContext);
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const markAsCompleted = async (empId, idx) => {
    try {
      if (loggedInUser.role === 'employee') {
        await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/employees/${empId}/tasks/${idx}/completed`);
        getEmployee(empId);
        toast.success('Task marked as completed!');
      }
    } catch (err) {
      console.error('Error:', err);
      toast.error('Failed to mark task as completed.');
    }
  };

  const markAsFailed = async (empId, idx) => {
    try {
      if (loggedInUser.role === 'employee') {
        await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/employees/${empId}/tasks/${idx}/failed`);
        getEmployee(empId);
        toast.success('Task marked as failed!');
      }
    } catch (err) {
      console.error('Error:', err);
      toast.error('Failed to mark task as failed.');
    }
  };

  const deleteTask = async (empId, idx) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;

    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/admins/${empId}/tasks/${idx}/delete-task`);
      getEmployee(empId);
      toast.success('🗑️ Task deleted successfully!');
    } catch (error) {
      console.error('Delete failed:', error);
      toast.error('Failed to delete task.');
    }
  };

  return (
    <div className='shrink-0 w-[16rem] sm:w-[18rem] h-[18rem] sm:h-[20rem] bg-[#1f1f1f] rounded-2xl p-4 sm:p-5 flex flex-col justify-between'>
      {/* Header */}
      <div className='flex justify-between items-center text-white text-sm'>
        <span className='bg-blue-400 text-black px-2 py-0.5 rounded'>{e.category}</span>
        <span className='text-gray-300 text-xs sm:text-sm'>{e.taskDate}</span>
      </div>

      {/* Title & Description */}
      <div className='pt-4 sm:pt-6 h-[70%]'>
        <h2 className='text-lg sm:text-xl font-semibold text-white mt-2'>{e.taskTitle}</h2>
        <p className='text-gray-300 text-sm mt-2 line-clamp-3'>{e.taskDescription}</p>
      </div>

      {/* Footer with buttons */}
      <div className='mt-3 sm:mt-4'>
        <h4 className='text-white text-sm font-medium mb-2'>Active Task</h4>
        <div className='flex items-center justify-between'>
          <div className='flex gap-2'>
            <button
              onClick={() => markAsCompleted(id, i)}
              className='bg-green-400 hover:bg-green-500 text-black font-semibold text-sm px-3 py-1 rounded-lg transition'
            >
              Complete
            </button>
            <button
              onClick={() => markAsFailed(id, i)}
              className='bg-red-400 hover:bg-red-500 text-white font-semibold text-sm px-3 py-1 rounded-lg transition'
            >
              Fail
            </button>
          </div>

          {/* Bin Icon */}
          {loggedInUser?.role === 'admin' && (
            <button
              onClick={() => deleteTask(id, i)}
              title="Delete Task"
              className='text-gray-400 hover:text-red-500 transition'
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActiveTask;
