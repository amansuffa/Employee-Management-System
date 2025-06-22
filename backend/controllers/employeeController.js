import Employee from '../models/Employee.js';


export const getEmployee = async(req, res) =>{
  try {
    const employeeId = req.params.id;
    const employee = await Employee.findById(employeeId).select('-password')
    if(!employee){
    return res.status(400).json({message: 'Not found'})
  }
  res.status(200).json(employee)
  } catch (error) {
    console.log(error);
    res.status(500).json({message: error})
  }
}



export const markAsActive = async(req,res)=>{
  try {
    const employeeId = req.params.id;
    const taskIndex = req.params.taskIndex;
    const employee = await Employee.findById(employeeId)
    if(!employee){
    return res.status(400).json({message: 'Employee Not found'})
  }

  const task = employee.tasks[taskIndex];

  if(!task){
    return res.status(400).json({message: 'Task Not found'})
  }

  if (!task.active && task.newTask) {
    task.active = true;
    task.newTask = false;


    employee.taskCounts.active += 1;
    employee.taskCounts.newTask -= 1;
  }

 if (!task.active && task.completed) {
    task.active = true;
    task.completed = false;

    employee.taskCounts.active += 1;
    employee.taskCounts.completed -= 1;
  }
 if (!task.active && task.failed) {
    task.active = true;
    task.failed = false;

  
    employee.taskCounts.active += 1;
    employee.taskCounts.failed -= 1;
  }


  await employee.save();

  res.status(200).json({ message: 'Task marked as active', task, taskCounts: employee.taskCounts });

  } catch (error) {
    console.log(error);
    res.status(500).json({message: error})
  }
}




export const markAsCompleted = async(req,res)=>{
  try {
    const employeeId = req.params.id;
    const taskIndex = req.params.taskIndex;
    const employee = await Employee.findById(employeeId)
    if(!employee){
    return res.status(400).json({message: 'Employee Not found'})
  }

  const task = employee.tasks[taskIndex];

  if(!task){
    return res.status(400).json({message: 'Task Not found'})
  }

  if (!task.completed && task.active) {
    task.completed = true;
    task.active = false;

    employee.taskCounts.completed += 1;
    employee.taskCounts.active -= 1;
  }

  await employee.save();

  res.status(200).json({ message: 'Task marked as completed', task, taskCounts: employee.taskCounts });

  } catch (error) {
    console.log(error);
    res.status(500).json({message: error})
  }
}


export const markAsFailed = async(req,res)=>{
  try {
    const employeeId = req.params.id;
    const taskIndex = req.params.taskIndex;
    const employee = await Employee.findById(employeeId)
    if(!employee){
    return res.status(400).json({message: 'Employee Not found'})
  }

  const task = employee.tasks[taskIndex];

  if(!task){
    return res.status(400).json({message: 'Task Not found'})
  }

  if (!task.failed && task.active) {
    task.failed = true;
    task.active = false;


    employee.taskCounts.failed += 1;
    employee.taskCounts.active -= 1;
  }

  await employee.save();

  res.status(200).json({ message: 'Task marked as failed', task, taskCounts: employee.taskCounts });

  } catch (error) {
    console.log(error);
    res.status(500).json({message: error})
  }
}


