# 📊 Excel Analytics Platform

An interactive *full-stack web application* that allows users to upload Excel/CSV files and generate different types of charts (Bar, Line, Pie, Doughnut, Radar, Polar Area, etc.) for visualization.  
Each user has their own *upload history, secure login system, and the ability to **download charts* for reporting.

---

## 🚀 Features
- 🔑 *User Authentication* (Login & Registration using JWT + Bcrypt)  
- 📂 *Upload Excel/CSV files* and parse them in real-time  
- 📊 *Generate multiple types of charts* (Bar, Line, Pie, Doughnut, Radar, Polar Area)  
- 💾 *Upload History* – Each user can view only their uploaded files  
- ⬇ *Download Charts* as PNG images  
- 🔒 *Protected Routes* – Only logged-in users can access dashboard and history  
- 🎨 *Beautiful UI* built with React + TailwindCSS  

---

## 🛠 Tech Stack
### Frontend:
- ⚛ React.js  
- 🎨 TailwindCSS  
- 📈 Chart.js & React-Chartjs-2  

### Backend:
- 🟢 Node.js  
- ⚡ Express.js  
- 🍃 MongoDB + Mongoose  
- 🔐 JWT Authentication + Bcrypt for password security  

---

## ⚙ Installation

### Clone the repository
```bash
git clone https://github.com/your-username/Internship-Project.git
cd Internship-Project

###backendsetup
```bash
cd backend
npm install
npm start

###Frontendsetup
```bash
cd frontend
npm install
npm run dev

