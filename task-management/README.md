# 🧩 Task Management API

A simple **Node.js + Express** backend project for managing tasks.  
This project was created as part of **Lab 01: Initialize Task Management Project and Set Up Node.js Express Server**.

---

## 🚀 Features

- Built with **Node.js** and **Express**
- Implements basic **RESTful API routes**
- Demonstrates good project structure with **Express Router**
- Includes error handling for invalid task IDs
- Tested using **Postman**

---

## 🛠️ Project Structure

```
task-management/
├── package.json
├── .gitignore
├── README.md
└── src/
    ├── index.js
    └── routes/
        └── tasks.js
```

---

## ⚙️ Setup Instructions

### **1️⃣ Prerequisites**
Make sure you have the following installed:
- [Node.js (LTS version)](https://nodejs.org)
- npm (comes with Node.js)
- [Postman](https://www.postman.com/downloads/)

### **2️⃣ Clone or Create Project**
```bash
# Create a new project folder
mkdir task-management
cd task-management
```

### **3️⃣ Initialize Node.js Project**
```bash
npm init -y
```

### **4️⃣ Install Dependencies**
```bash
npm install express
```

### **5️⃣ Run the Server**
```bash
npm start
```

If you don’t have a start script yet, add this to your **package.json**:
```json
"scripts": {
  "start": "node src/index.js"
}
```

Then run:
```bash
npm start
```

✅ The server should start at:
```
http://localhost:3000
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description | Example Response |
|:--------|:----------|:-------------|:-----------------|
| **GET** | `/` | Health check homepage | `"Task Management API is running!"` |
| **GET** | `/tasks` | Get all tasks | Returns array of 5 tasks |
| **GET** | `/tasks/:id` | Get task by ID | Returns one task or error |
| **GET** | `/health` | Check API health and uptime | `{ "status": "healthy", "uptime": 123.45 }` |

---

## 🧪 Example Responses

### **GET `/tasks`**
```json
[
  { "id": 1, "title": "Learn Node.js", "completed": false, "priority": "high", "createdAt": "2025-11-04T18:00:00.000Z" },
  { "id": 2, "title": "Build REST API", "completed": false, "priority": "medium", "createdAt": "2025-11-04T18:00:00.000Z" }
]
```

### **GET `/tasks/2`**
```json
{ "id": 2, "title": "Build REST API", "completed": false, "priority": "medium", "createdAt": "2025-11-04T18:00:00.000Z" }
```

### **GET `/tasks/abc`**
```json
{ "error": "Invalid ID format" }
```

### **GET `/tasks/999`**
```json
{ "error": "Task not found" }
```

---

## 🧾 Version Control Setup

### **Initialize Git**
```bash
git init
echo "node_modules/" > .gitignore
git add .
git commit -m "Initial setup of Node.js and Express Task Management API"
```

### **Create a Feature Branch**
```bash
git branch features/routes
git checkout features/routes
```

### **Push Changes**
```bash
git remote add origin <your-repo-url>
git push -u origin features/routes
```

---

## 🧠 Author
**Nazmus Sakib**  
Student — Web Design and Programming Lab II  
*Task Management Project (Node.js + Express)*

---

## ✅ Expected Output
After running:
```bash
npm start
```
You should see in your terminal:
```
Server running at http://localhost:3000
```

Open browser or Postman and test:
- ✅ `GET /` → “Task Management API is running!”
- ✅ `GET /tasks` → Returns task list
- ✅ `GET /tasks/2` → Returns one task
- ✅ `GET /tasks/abc` → Returns `{ "error": "Invalid ID format" }`
- ✅ `GET /health` → Returns `{ "status": "healthy", "uptime": ... }`

---

