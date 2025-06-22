import mongoose from 'mongoose';


const taskSchema = new mongoose.Schema({
  taskTitle: String,
  taskDescription: String,
  taskDate: String,
  category: String,
  active: Boolean,
  newTask: Boolean,
  completed: Boolean,
  failed: Boolean
});

const employeeSchema = new mongoose.Schema({
  firstName: String,
  email: { type: String, unique: true },
  password: String,
  taskCounts: {
    active: { type: Number, default: 0 },
    newTask: { type: Number, default: 0 },
    completed: { type: Number, default: 0 },
    failed: { type: Number, default: 0 }
  },
  tasks: [taskSchema]
});


export default mongoose.model('employees', employeeSchema,'employees');
