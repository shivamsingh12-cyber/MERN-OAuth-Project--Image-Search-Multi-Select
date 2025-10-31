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
├── client/ # Frontend (React)
│ ├── src/
│ │ ├── components/
│ │ │ └── HomePage.jsx # Main image search dashboard
      └── LoginPage.jsx # OAuth Login Page
│ │
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── package.json
│ └── vite.config.js
│
├── server/ # Backend (Node.js / Express)
│ ├── config/
│ │ ├── db.js # MongoDB connection setup
│ │ ├── passport.js # Initialize passport strategies
│ │ └── strategies/
│ │ ├── jwt.js # JWT strategy for token auth
│ │ └── github-login.js # GitHub OAuth2 login strategy
│ │ └── google-login.js # Google OAuth2 login strategy
│ ├── model/
│ │ ├── User.js # User schema
│ │ └── Search.js # Stores search term + userId
│ │
│ ├── routes/
│ │ ├── authRoutes.js # Login / logout / GitHub auth routes
│ │ └── searchRoutes.js # Search, history, and top searches
│ │
│ ├── .env # Environment variables
│ ├── index.js # Entry point — starts Express server
│ ├── package.json
│ └── README.md
│
└── README.md # Project documentation (this file)


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

![show_1](https://github.com/user-attachments/assets/3ac9f425-0132-4d03-b899-254ba515e17a)

![show_2](https://github.com/user-attachments/assets/31e38821-3386-4047-981b-1cf872c32c26)

![show_3](https://github.com/user-attachments/assets/3c1d0fd5-e2d0-4f9b-8cb4-b43bf9ebb049)





🧑‍💻 Author

Shivam Singh
Full Stack Developer



