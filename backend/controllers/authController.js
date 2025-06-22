import Employee from '../models/Employee.js';
import dotenv from 'dotenv';
dotenv.config();

export const loginUser = async (req, res) => {
try {
      const { email, password } = req.body;


  // Admin login 
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
   
    
    return res.status(200).json({ role: 'admin' ,_id: '1', name: process.env.ADMIN_NAME});
}

// Employee login 
const employee = await Employee.findOne({ email, password });
if (!employee) return res.status(401).json({ message: 'Invalid credentials' });


res.status(200).json({ role: 'employee', _id: employee._id ,name: employee.firstName });

} catch (error) {
res.status(500).json({message: error})
    
}
};
