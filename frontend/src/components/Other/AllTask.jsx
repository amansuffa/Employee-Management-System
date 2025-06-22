import React, { useContext } from 'react';
import { EmployeeContext } from '../../context/EmployeeProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Trash2 } from 'lucide-react';

const AllTask = () => {
  const navigate = useNavigate();
  const { allData, getAllEmployees } = useContext(EmployeeContext);

  if (!allData) {
    return <div className='text-white p-8'>Loading tasks...</div>;
  }

  const openEmployeeDashboard = (e) => {
    navigate(`/employee/${e._id}`, {
      state: {
        employeeName: e.firstName,
      },
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this employee?')) return;

    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/admins/${id}/delete-employee`);
      toast.success('Employee deleted successfully!');
      getAllEmployees();
    } catch (err) {
      console.error('Delete failed:', err);
      toast.error('Failed to delete employee');
    }
  };

  return (
    <div className="bg-black flex justify-center items-start px-4 py-10">
      <div className="bg-[#1f1f1f] rounded-xl shadow-lg p-4 sm:p-6 w-full max-w-5xl overflow-x-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6 text-center">📋 Recent Tasks</h2>

        <div className="overflow-auto">
          <table className="min-w-full text-left text-white text-sm sm:text-base">
            <thead>
              <tr className="bg-[#2c2c2c] text-blue-400">
                <th className="py-2 sm:py-3 px-2 sm:px-4">Name</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4">Task</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4">Status</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {allData.map((e, i) => (
                <tr key={i} className="border-b border-gray-700 hover:bg-[#333333] transition">
                  <td className="py-2 sm:py-3 px-2 sm:px-4">
                    <button
                      className="hover:underline rounded px-1 sm:px-2"
                      onClick={() => openEmployeeDashboard(e)}
                    >
                      {e.firstName}
                    </button>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4">
                    {e.tasks.length > 0 ? e.tasks.at(-1).taskTitle : 'No tasks'}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4">
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                        e.tasks.length > 0
                          ? e.tasks.at(-1).active
                            ? 'bg-yellow-300 text-black'
                            : e.tasks.at(-1).newTask
                            ? 'bg-blue-400 text-black'
                            : e.tasks.at(-1).completed
                            ? 'bg-green-400 text-black'
                            : e.tasks.at(-1).failed
                            ? 'bg-red-500 text-white'
                            : 'bg-gray-400 text-white'
                          : 'bg-gray-400 text-white'
                      }`}
                    >
                      {e.tasks.length > 0
                        ? e.tasks.at(-1).active
                          ? 'Active'
                          : e.tasks.at(-1).newTask
                          ? 'New'
                          : e.tasks.at(-1).completed
                          ? 'Completed'
                          : e.tasks.at(-1).failed
                          ? 'Failed'
                          : 'Unknown'
                        : 'No Task'}
                    </span>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-center">
                    <button
                      onClick={() => handleDelete(e._id)}
                      className="p-1 hover:text-red-500 transition"
                      title="Delete Employee"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
