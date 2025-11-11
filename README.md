# 🧭 CareerPath: A Full Stack Career Management System  

**CareerPath** is a **full-stack web application** that helps users manage and track their career journey — from job applications to interview updates — all in one place.  
It features secure authentication, a professional dashboard, and a modern UI designed to enhance the career management experience.  

---

## 📖 Overview  

CareerPath enables users to:  
- 👤 Register and log in securely using **JWT-based authentication**  
- 💼 Add, edit, or delete job applications they’ve applied for  
- 🧾 View and manage all their applications in one dashboard  
- 🎨 Enjoy a clean, responsive interface built with **Tailwind CSS**  

This project demonstrates a **complete real-world full-stack workflow**, integrating **React**, **Node.js**, and **MongoDB Atlas** for seamless performance.  

---

## 🚀 Features  

| Category | Description |
|-----------|--------------|
| 🔐 **User Authentication** | Secure login and signup using JWT |
| 🧑‍💻 **Profile Page** | View personal details and user ID securely |
| 💼 **Job Tracker** | Add, edit, and delete job applications with progress status |
| 🎨 **Modern UI/UX** | Built using Tailwind CSS for a professional, responsive design |
| ☁️ **Cloud Database** | All user data and job details stored in MongoDB Atlas |
| 🧰 **Developer Tools** | Tested with Postman and version-controlled with GitHub |

---

## 🛠️ Tech Stack  

| Layer | Technologies Used |
|-------|-------------------|
| **Frontend** | React.js, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Authentication** | JSON Web Token (JWT), bcrypt.js |
| **Tools** | Postman, Git, GitHub, VS Code |

---

⚙️ Installation & Setup

Follow these simple steps to set up CareerPath on your local system 👇

🧩 Step 1: Clone the Repository
git clone https://github.com/bkarthik18/CareerPath-A-Full-Stack-Career-Management-System-.git
cd CareerPath-A-Full-Stack-Career-Management-System-

🧩 Step 2: Setup Backend
cd backend
npm install
npm start


This runs the backend on http://localhost:5000

🧩 Step 3: Setup Frontend

Open a new terminal:

cd frontend
npm install
npm start


This runs the frontend on http://localhost:3000

🔑 Environment Variables

In the backend folder, create a file named .env and add:

MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  
PORT=5000


These values are private and already ignored by .gitignore.

## 🖼️ Project Screenshots  

### 📝 Register Page  
![Register Page](https://raw.githubusercontent.com/bkarthik18/CareerPath-A-Full-Stack-Career-Management-System-/refs/heads/main/screenshots/Register.png.png)

### 🔐 Login Page  
![Login Page](https://raw.githubusercontent.com/bkarthik18/CareerPath-A-Full-Stack-Career-Management-System-/refs/heads/main/screenshots/Login.png.png)

### 👤 Profile Page  
![Profile Page](https://raw.githubusercontent.com/bkarthik18/CareerPath-A-Full-Stack-Career-Management-System-/refs/heads/main/screenshots/Profile.png.png)

### 💼 Job Tracker  
![Job Tracker](https://raw.githubusercontent.com/bkarthik18/CareerPath-A-Full-Stack-Career-Management-System-/refs/heads/main/screenshots/JobTracker.png.png)

