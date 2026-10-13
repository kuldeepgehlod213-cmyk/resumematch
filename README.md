# ResumeMatch

AI-powered web app jo resume ko job description se match karke match score, missing keywords aur improvement suggestions deta hai.

## Problem
Students ko pata nahi chalta ki unka resume kisi job ke liye kitna suitable hai aur kaun si skills missing hain. ResumeMatch ye analysis kuch seconds mein kar deta hai.

## Features
- [x] Signup / Login (JWT authentication, bcrypt password hashing)
- [x] Protected routes (middleware se token verify)
- [x] Resume aur job description save karna
- [x] Purani analysis ki history dekhna
- [x] History delete karna (sirf apni entries)
- [ ] Match score, missing keywords aur suggestions (AI)
- [ ] React frontend
- [ ] Live deploy

## Tech Stack
- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB (Atlas)
- **AI:** LLM API (backend se call hoti hai)
- **Deploy:** Vercel (frontend), Render (backend)

## Status
In progress. Backend ka auth aur history (CRUD) complete hai. AI analysis aur React frontend abhi baaki hain.

## API Endpoints
| Method | Endpoint | Kaam | Auth |
|---|---|---|---|
| POST | /api/auth/signup | Naya user banana | Nahi |
| POST | /api/auth/login | Login, token milta hai | Nahi |
| GET | /api/auth/me | Apna profile | Haan |
| POST | /api/analysis | Nayi analysis save | Haan |
| GET | /api/analysis | Apni history | Haan |
| DELETE | /api/analysis/:id | Apni entry delete | Haan |

## Run karne ka tarika
1. Repo clone karo
2. `cd server` aur `npm install`
3. `server` folder mein `.env` file banao (naam ke saath variables):
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   API_KEY=your_api_key
4. `node index.js`

## Author
Kuldeep Gehlod
