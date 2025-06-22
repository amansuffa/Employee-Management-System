import express from 'express';
import { getEmployee, markAsActive , markAsCompleted, markAsFailed} from '../controllers/employeeController.js';

const router = express.Router();


router.get('/:id', getEmployee);
router.put('/:id/tasks/:taskIndex/active', markAsActive);
router.put('/:id/tasks/:taskIndex/completed', markAsCompleted);
router.put('/:id/tasks/:taskIndex/failed', markAsFailed);






export default router;
