import express from 'express';
import { getAllEmployees,createEmployee, addTaskToEmployee,deleteTask, deleteEmployee} from '../controllers/adminController.js';

const router = express.Router();

router.get('/', getAllEmployees);
router.post('/create', createEmployee);
router.post('/:id/tasks', addTaskToEmployee);
router.delete('/:id/tasks/:index/delete-task', deleteTask)
router.delete('/:id/delete-employee', deleteEmployee);




export default router;
