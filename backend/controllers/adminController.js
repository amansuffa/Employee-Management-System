import Employee from '../models/Employee.js';


export const getAllEmployees = async (req, res) => {
try {
    const employees = await Employee.find().select('-password');
  res.status(200).json(employees);
} catch (error) {
  console.log(error);
  res.status(500).json({message: e})
}
};



export const createEmployee = async (req, res) => {
try {
    const employee = new Employee(req.body);
  await employee.save();
  res.status(200).json(employee);
} catch (error) {
  console.log(error);
  res.status(500).json({message: error})
}
};


export const addTaskToEmployee = async(req, res)=>{
  const { id } = req.params;
const { taskTitle, taskDate, category, taskDescription } = req.body;
try {

 const employee = await Employee.findById(id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });

    const newTask = {
      taskTitle,
      taskDate,
      category,
      taskDescription,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    employee.tasks.push(newTask);
    employee.taskCounts.newTask += 1;

    await employee.save();
    res.status(200).json({ message: 'Task added successfully', employee });

} catch (error) {
      res.status(500).json({ message: error });
}
}


export const deleteTask = async (req, res) => {
  try {
    const { id, index } = req.params;
    const employee = await Employee.findById(id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });

    
    const removedTask = employee.tasks.splice(index, 1)[0];

    
    if (removedTask) {
      if (removedTask.newTask) employee.taskCounts.newTask--;
      if (removedTask.active) employee.taskCounts.active--;
      if (removedTask.completed) employee.taskCounts.completed--;
      if (removedTask.failed) employee.taskCounts.failed--;
    }

    await employee.save();
    res.json({ message: 'Task deleted', employee });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ message: 'Server error' });
  }
};



export const deleteEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;

    const deleted = await Employee.findByIdAndDelete(employeeId);
    if (!deleted) return res.status(404).json({ message: 'Employee not found' });

    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error('Delete Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
