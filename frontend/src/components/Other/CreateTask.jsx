import React, { useState, useContext } from 'react';
import axios from 'axios';
import { EmployeeContext } from '../../context/EmployeeProvider';
import toast from 'react-hot-toast';

const CreateTask = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    assignTo: '',
    category: '',
    description: '',
  });

  const { allData, getAllEmployees } = useContext(EmployeeContext);

  if (!allData) {
    return <div className='text-white p-8'>Loading form...</div>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admins/${formData.assignTo}/tasks`, {
        taskTitle: formData.title,
        taskDate: formData.date,
        category: formData.category,
        taskDescription: formData.description,
      });
      toast.success('Task created successfully!');
      setFormData({ title: '', date: '', assignTo: '', category: '', description: '' });
      getAllEmployees();
    } catch (error) {
      console.error('Error creating task:', error);
      toast.error('Failed to create task.');
    }
  };

  return (
    <div className="bg-black flex justify-center items-center px-4 py-10">
      <div className="bg-[#1f1f1f] rounded-2xl shadow-xl p-6 w-full max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6">📝 Create New Task</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col lg:flex-row gap-6 flex-wrap">
            {/* Left Column */}
            <div className="flex-1 min-w-[250px] space-y-5">
              <div>
                <label className="block text-white font-medium mb-1">Task Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-[#2c2c2c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-[#2c2c2c] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-1">Assign To</label>
                <select
                  name="assignTo"
                  value={formData.assignTo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-[#2c2c2c] text-white"
                  required
                >
                  <option value="">Select Employee</option>
                  {allData.map((emp) => (
                    <option key={emp._id} value={emp._id}>
                      {emp.firstName} ({emp.email})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-1">Category</label>
                <input
                  type="text"
                  name="category"
                  placeholder="e.g. Work, Personal"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-[#2c2c2c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 min-w-[250px] space-y-5 flex flex-col justify-between">
              <div>
                <label className="block text-white font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  placeholder="Write a brief description..."
                  value={formData.description}
                  onChange={handleChange}
                  rows={8}
                  className="w-full px-3 py-2 rounded-lg bg-[#2c2c2c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="text-right w-full">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                >
                  Create Task
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
