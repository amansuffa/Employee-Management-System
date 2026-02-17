# 🧑‍💼 Employee Task Management System

A full-stack task management application where **Admins** can create employees and assign tasks. **Employees** can log in to view, accept, and update task status as **Completed** or **Failed**. The application is built using the **MERN stack**: React.js, Node.js, Express.js, and MongoDB.

---

## 🌐 Live Demo
👉 https://employee-management-system-frontend-beryl.vercel.app/

---

## 🌐 Demo Credentials
- 🔑 Admin Login
    - 📧 Email: admin@pk.com
    - 🔒 Password: 123
- 👷 Employee Logins
    | Email             | Password |
    | ----------------- | -------- |
    | emp1@pk.com       | 123      |
    | emp2@pk.com       | 123      |
    | emp3@pk.com       | 123      |
    | emp4@pk.com       | 123      |
    | emp5@pk.com       | 123      |
  
---

## 🚀 Features

- 🔐 User Authentication (Admin & Employees)
- 👥 Role-based access (Admin | Employee)
- ✅ Admin can:
  - Create Employees
  - Assign New Tasks
  - View Task Status
- 📝 Employees can:
  - View Assigned Tasks
  - Mark Task as Completed or Failed
- 📦 RESTful APIs using Express.js & Mongoose
- 💾 MongoDB Atlas Database Integration

---

## 🛠 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Styling**: CSS (or Tailwind)

---

## � Environment Variables

### Backend Environment Variables
Create a `.env` file in the `backend/` directory with the following variables:

```dotenv
MONGO_URI=mongodb://localhost:27017/ems          # MongoDB connection string
PORT=8080                                         # Server port (default: 8080)
ADMIN_EMAIL=admin@test.com                        # Admin email for authentication
ADMIN_PASSWORD=admin                              # Admin password
ADMIN_NAME=Admin                                  # Admin username
```

### Frontend Environment Variables
Create a `.env` file in the `frontend/` directory with the following variables:

```dotenv
VITE_BACKEND_URL=http://localhost:8080            # Backend API URL (update for production)
```

**Note:** Refer to `.env.example` files in both backend and frontend folders for templates.

---

## �📂 Project Structure (MVC)
backend/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── server.js
└── config/


frontend/
│
├── components/
├── App.jsx
└── index.js



    
