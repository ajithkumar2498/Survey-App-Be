# 🛠️ SurveyApp - Backend API

The backend server for **SurveyApp**, a real-time survey platform. Built with **Node.js**, **Express**, and **MongoDB**, it handles user authentication, survey management, and real-time response updates using **Socket.io**.

## 🚀 Live Demo
**Base URL:** [https://survey-app-be.onrender.com/](https://survey-app-be.onrender.com/)

---

## ✨ Features

* **🔐 Authentication:** Secure JWT-based authentication (Login/Register) with password hashing using Bcrypt.
* **📡 Real-time Engine:** Uses `Socket.io` to push new survey responses to the frontend instantly.
* **📝 Survey Management:** APIs to create, read, and manage surveys.
* **📊 Response Tracking:** Secure endpoints to submit and retrieve survey responses.
* **🛡️ Security:** Configured with CORS protection and secure HTTP headers.
* **🗄️ Database:** Mongoose schemas for structured data validation in MongoDB.

---

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (via Mongoose)
* **Real-time:** Socket.io
* **Auth:** JSON Web Token (JWT) & Bcryptjs
* **Utilities:** Dotenv, CORS, Nodemon

---

## ⚙️ Setup & Installation

### 1. Prerequisites
* Node.js (v14 or higher)
* A MongoDB Atlas connection string (or local MongoDB).

### 2. Clone & Install
```bash
# Clone the repository
git clone [https://github.com/ajithkumar2498/Survey-App-Be](https://github.com/ajithkumar2498/Survey-App-Be)

# Enter the directory
cd survey-app-backend

# Install dependencies
npm install