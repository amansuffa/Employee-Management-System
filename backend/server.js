import express from 'express';
import connectDB from './config/db.js';
import employeeRoutes from './routes/employeeRoutes.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js'
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
connectDB();

const allowedOrigins = [
  'http://localhost:5173', 
  'https://employee-management-system-frontend-beryl.vercel.app' 
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, 
}));





app.use(express.json());

app.use('/api/employees', employeeRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
