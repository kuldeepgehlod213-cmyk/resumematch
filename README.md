# ResumeMatch

AI-powered web app jo resume ko job description se match karke match score, missing keywords aur improvement suggestions deta hai.

## Problem
Students ko pata nahi chalta ki unka resume kisi job ke liye kitna suitable hai aur kaun si skills missing hain. ResumeMatch ye analysis kuch seconds mein kar deta hai.

## Features
- [ ] Signup / Login (JWT authentication)
- [ ] Resume aur job description paste karna
- [ ] Match score, missing keywords aur suggestions (AI)
- [ ] Purani analysis ki history
- [ ] History delete karna

## Tech Stack
- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB (Atlas)
- **AI:** LLM API (backend se call hoti hai)
- **Deploy:** Vercel (frontend), Render (backend)

## Status
In progress. Backend setup complete, baaki features build ho rahe hain.

## Run karne ka tarika
1. Repo clone karo
2. `cd server` aur `npm install`
3. `server` folder mein `.env` file banao:
   PORT=5000
   MONGO_URI=your_mongodb_uri
   API_KEY=your_api_key
4. `node index.js`

## Author
Kuldeep Gehlod
