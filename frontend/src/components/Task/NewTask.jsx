import React, { useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { EmployeeContext } from '../../context/EmployeeProvider';
import toast from 'react-hot-toast';
import { Trash2 } from 'lucide-react';

const NewTask = ({ e, i }) => {
  const { id } = useParams();
  const { getEmployee } = useContext(EmployeeContext);
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const markAsActive = async (empId, idx) => {
    try {
      if (loggedInUser.role === 'employee') {
        await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/employees/${empId}/tasks/${idx}/active`);
        getEmployee(empId);
        toast.success('Task moved to active!');
      }
    } catch (err) {
      console.error('Error:', err);
      toast.error('Failed to activate task.');
    }
  };

  const deleteTask = async (empId, idx) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;

    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/admins/${empId}/tasks/${idx}/delete-task`);
      getEmployee(empId);
      toast.success('Task deleted!');
    } catch (error) {
      console.error('Delete failed:', error);
      toast.error('Failed to delete task.');
    }
  };

  return (
    <div className="shrink-0 w-[16rem] sm:w-[18rem] h-[18rem] sm:h-[20rem] bg-[#1f1f1f] rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center text-xs sm:text-sm text-white">
        <span className="bg-blue-400 text-black px-2 py-0.5 rounded">{e.category}</span>
        <span className="text-gray-300">{e.taskDate}</span>
      </div>

      {/* Title & Description */}
      <div className="pt-4 sm:pt-6 h-[70%]">
        <h2 className="text-lg sm:text-xl font-semibold text-white">{e.taskTitle}</h2>
        <p className="text-gray-300 text-xs sm:text-sm mt-2 line-clamp-3">{e.taskDescription}</p>
      </div>

      {/* Footer Buttons */}
      <div>
        <h4 className="text-white text-xs sm:text-sm font-medium mb-2">New Task</h4>
        <div className="flex items-center justify-between">
          <button
            onClick={() => markAsActive(id, i)}
            className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold text-sm px-2 sm:px-3 py-1 rounded-md transition"
          >
            Mark Active
          </button>

          {loggedInUser?.role === 'admin' && (
            <button
              onClick={() => deleteTask(id, i)}
              className="text-gray-400 hover:text-red-500 transition"
              title="Delete Task"
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewTask;
