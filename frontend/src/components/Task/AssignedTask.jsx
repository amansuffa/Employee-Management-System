import React, { useContext } from 'react';
import NewTask from './NewTask';
import ActiveTask from './ActiveTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import { EmployeeContext } from '../../context/EmployeeProvider';

const AssignedTask = () => {
  const { employeeData } = useContext(EmployeeContext);

  if (!employeeData || !employeeData.tasks) {
    return <div className='text-white p-8'>Loading tasks...</div>;
  }

  return (
    <div className="px-4 py-6 md:px-8 w-full">

      <div className="flex overflow-x-auto space-x-4 pb-2 gap-y-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:space-x-0">
        {employeeData.tasks.map((e, i) => {
          if (e.newTask) return <div key={i} className="shrink-0 sm:shrink">{<NewTask e={e} i={i} />}</div>;
          if (e.active) return <div key={i} className="shrink-0 sm:shrink">{<ActiveTask e={e} i={i} />}</div>;
          if (e.completed) return <div key={i} className="shrink-0 sm:shrink">{<CompleteTask e={e} i={i} />}</div>;
          if (e.failed) return <div key={i} className="shrink-0 sm:shrink">{<FailedTask e={e} i={i} />}</div>;
          return null;
        })}
      </div>
    </div>
  );
};

export default AssignedTask;
