import React, { useContext } from 'react';
import { EmployeeContext } from '../../context/EmployeeProvider';

const TaskNumbers = () => {
  const { employeeData } = useContext(EmployeeContext);

  if (!employeeData || !employeeData.taskCounts) {
    return <div className="text-white p-8">Loading task counts...</div>;
  }

  const taskCards = [
    {
      title: 'New Tasks',
      count: employeeData.taskCounts.newTask,
      bg: 'bg-blue-400 text-white',
    },
    {
      title: 'Active Tasks',
      count: employeeData.taskCounts.active,
      bg: 'bg-yellow-300 text-gray-700',
    },
    {
      title: 'Completed Tasks',
      count: employeeData.taskCounts.completed,
      bg: 'bg-green-400 text-gray-700',
    },
    {
      title: 'Failed Tasks',
      count: employeeData.taskCounts.failed,
      bg: 'bg-red-400 text-white',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-8 sm:mb-3">
      {taskCards.map((card, index) => (
        <div key={index} className={`${card.bg} rounded-md p-4 sm:p-6`}>
          <h1 className="sm:text-2xl text-xl font-bold mb-1 sm:mb-2">{card.count}</h1>
          <h2 className="sm:text-xl text-base font-medium">{card.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default TaskNumbers;
