# 🖼️ Unsplash Image Search Dashboard

A **Full-Stack Image Search Application** built using **React, Node.js, Express, MongoDB**, and the **Unsplash API**.  
Users can:
- Search for images from Unsplash
- See their own search history
- View trending (top searched) terms
- Login with GitHub or JWT-based authentication

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React (Vite) |
| **Backend** | Node.js, Express |
| **Database** | MongoDB (Mongoose) |
| **Authentication** | Passport.js with JWT & GitHub OAuth |
| **External API** | Unsplash API |
| **Styling** | Plain CSS (no UI framework required) |

---

## 🧩 Folder Structure
project-root/
│
├── client/                           # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   └── HomePage.jsx          # Main dashboard for image search, selection & history
│   │   ├   └── LoginPage.jsx         # GitHub / Google login with JWT handling
│   │   │   
│   │   ├── App.jsx                   # Root component with routing
│   │   └── main.jsx                  # React entry point
│   │
│   ├── package.json                  # Frontend dependencies & scripts
│   └── vite.config.js                # Vite configuration (proxy, env setup)
│
├── server/                           # Backend (Node.js + Express)
│   ├── config/
│   │   ├── db.js                     # MongoDB connection setup using Mongoose
│   │   ├── passport.js               # Passport initialization for OAuth/JWT
│   │   └── strategies/
│   │       ├── jwt.js                # JWT strategy (extracts and validates token from cookies)
│   │       └── github-login.js       # GitHub OAuth2 login strategy
│   │
│   ├── model/
│   │   ├── User.js                   # User schema (GitHubId, email, etc.)
│   │   └── Search.js                 # Stores user search terms & timestamps
│   │
│   ├── routes/
│   │   ├── authRoutes.js             # Authentication routes (login, logout, GitHub callback)
│   │   └── searchRoutes.js           # Search APIs (fetch, history, top searches)
│   │
│   ├── .env                          # Environment variables (PORT, Mongo URI, OAuth keys)
│   ├── index.js                      # Express server entry file
│   ├── package.json                  # Backend dependencies & scripts
│   └── README.md                     # Backend-specific documentation
│
└── README.md                         # Main project documentation (setup, usage, API, etc.)



---

## ⚙️ Environment Variables for backend

Create a `.env` file inside your **server/** folder and add:

```env
PORT=8000
MONGO_URI=mongodb://localhost:27017/image-search
JWT_SECRET=your_super_secret_key
UI_URL=http://localhost:5173
UNSPLASH_ACCESS_KEY=your_unsplash_access_key
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

## Setup Instruction

for backend
```bash
git clone https://github.com/shivamsingh12-cyber/MERN-OAuth-Project--Image-Search-Multi-Select.git
cd MERN-OAuth-Project--Image-Search-Multi-Select
cd server
npm install
npm start

for frontend
```bash
cd client
npm install
npm run dev

📚 API Endpoints
Method	             Endpoint	                           Description
POST	            /api/search	                      Search Unsplash for a term, store in DB
GET	                /api/history	                  Get current user's recent search history
GET	                /api/top-searches	              Get top 5 most searched terms overall
POST	            /auth/login	                      Login (JWT)
GET	                /auth/github	                  Start GitHub login
GET	                /auth/github/callback	          GitHub OAuth callback
POST	            /auth/logout	                  Logout (clear cookie)

## cURL (EndPoints)
```bash
curl -X POST http://localhost:8000/api/search \
     -H "Content-Type: application/json" \
     -b "token=<your_jwt_token>" \
     -d '{"term": "nature"}'

```bash
curl -X GET http://localhost:8000/api/search/history \
     -b "token=<your_jwt_token>"

```bash
curl -X GET http://localhost:8000/api/top-searches

```bash
curl -X POST http://localhost:8000/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","password":"123456"}'

```bash
curl -X POST http://localhost:8000/auth/logout \
     -b "token=<your_jwt_token>"



🖥️ Features

✅ Search Unsplash images in real time
✅ Select multiple images
✅ View your recent search history
✅ See top searched terms globally
✅ Secure authentication (JWT / GitHub OAuth)
✅ MongoDB storage for searches

## 🎥 App Demos  

![Image](https://github.com/user-attachments/assets/51d9fe33-5838-4990-91a0-30f9212b3d72)
![Image](https://github.com/user-attachments/assets/c580c3dc-945d-4c9a-83c1-16bf6a447b52)
![Image](https://github.com/user-attachments/assets/2b250dd2-5e87-44a4-8173-5801e40586cf)

Please see show_1,show_2,show_3 for visual graphics.



🧑‍💻 Author

Shivam Singh
Full Stack Developer



