import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Trash2 } from 'lucide-react';
import { EmployeeContext } from '../../context/EmployeeProvider';

const CompleteTask = ({ e, i }) => {
  const { id } = useParams();
  const { getEmployee } = useContext(EmployeeContext);
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const markAsActiveAgain = async (empId, idx) => {
    try {
      await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/employees/${empId}/tasks/${idx}/active`);
      toast.success("Task marked as active again!");
      getEmployee(empId);
    } catch (err) {
      console.error("Error:", err);
      toast.error("Failed to mark task as active again.");
    }
  };

  const deleteTask = async () => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/admins/${id}/tasks/${i}/delete-task`);
      toast.success("Task deleted.");
      getEmployee(id);
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Task delete failed.");
    }
  };

  return (
    <div className="shrink-0 w-[16rem] sm:w-[18rem] h-[18rem] sm:h-[20rem] bg-[#1f1f1f] rounded-2xl p-4 sm:p-5 flex flex-col justify-between">
      <div className="flex justify-between items-center text-white text-sm">
        <span className="bg-blue-400 text-black px-2 py-0.5 rounded">{e.category}</span>
        <span className="text-gray-300 text-xs sm:text-sm">{e.taskDate}</span>
      </div>

      <div className="pt-4 sm:pt-6 h-[70%]">
        <h2 className="text-lg sm:text-xl font-semibold text-white mt-2">{e.taskTitle}</h2>
        <p className="text-gray-300 text-sm mt-2 line-clamp-3">{e.taskDescription}</p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <button
            onClick={() => markAsActiveAgain(id, i)}
            className="bg-gray-400 hover:bg-gray-500 text-black font-semibold text-xs sm:text-sm px-2 py-0.5 rounded-lg transition"
          >
            Mark as Active again
          </button>

          {loggedInUser?.role === 'admin' && (
            <button
              onClick={deleteTask}
              className="text-gray-400 hover:text-red-500 transition"
              title="Delete Task"
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>
        <button className="bg-green-400 text-black text-sm w-full font-semibold py-1 mt-2 rounded-lg">
          Completed ☑
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
