import React, { useState, useContext } from 'react';
import axios from 'axios';
import { EmployeeContext } from '../../context/EmployeeProvider';
import toast from 'react-hot-toast';

const CreateEmployee = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
  });

  const { getAllEmployees } = useContext(EmployeeContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admins/create`, formData);
      console.log('Employee created:', res.data);
      toast.success('Employee created successfully!');
      setFormData({ firstName: '', email: '', password: '' });
      getAllEmployees();
    } catch (error) {
      console.error('Error creating employee:', error);
      toast.error('Failed to create employee.');
    }
  };

  return (
    <div className="bg-black flex justify-center items-center px-4 py-10">
      <div className="bg-[#1f1f1f] rounded-2xl shadow-xl p-6 w-full max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6">👤 Create New Employee</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col md:flex-row gap-6 flex-wrap">
            {/* Left Column */}
            <div className="flex-1 min-w-[250px] space-y-5">
              <div>
                <label className="block text-white font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-[#2c2c2c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-[#2c2c2c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 min-w-[250px] space-y-5 flex flex-col justify-between">
              <div>
                <label className="block text-white font-medium mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-[#2c2c2c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 w-full md:w-auto"
                >
                  Create Employee
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;
