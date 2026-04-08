# 🎬 CineTrack - Movie Watchlist App

A responsive web application to search for movies and manage your personal watchlist, built with React and the OMDB API.

---

## 🚀 Live Demo

👉 https://cine-track-movie-app.vercel.app/

---

## 🎯 Project Overview

CineTrack allows users to search for movies in real-time using the OMDB public API and save their favorite movies to a personal watchlist — all in a modern UI inspired by platforms like Netflix and HBO Max.

---

## 🛠️ Tech Stack

| Technology      | Purpose                    |
| --------------- | -------------------------- |
| React.js (Vite) | Frontend framework         |
| JavaScript      | Core logic                 |
| OMDB Public API | Movie data source          |
| CSS             | Styling and responsiveness |
| HTML            | Structure                  |


---

## ✨ Features

### 🔍 Core Features

* Live Movie Search — Fetch real-time results from OMDB API
* Watchlist Toggle — Add/remove movies from your list
* Loading State — Shows loading indicator during API calls
* Error Handling — Displays user-friendly error messages
* Responsive Design — Works on mobile, tablet, and desktop
* Empty States — UI for no results / empty watchlist

---

### ⚙️ Milestone 3 Features (Array HOFs)

* Search with Debounce — Optimized API calls
* Filtering — Filter by type (movie / series) using `.filter()`
* Sorting — Sort movies (A-Z / Year) using `.sort()`
* Mapping — Render UI using `.map()`
* Watchlist Check — Using `.some()`

---

### 🌟 Bonus Features

* Dark / Light Mode Toggle
* LocalStorage — Save watchlist permanently
* Random Movie Button — Suggests a random movie from watchlist

---

## 🌐 API Used

OMDB API — https://www.omdbapi.com/

* Used `fetch()` for API calls
* Endpoint used:
  https://www.omdbapi.com/?s={query}&apikey={key}

---

## 📁 Folder Structure

cine-track-movie-app/
├── public/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── MovieGrid.jsx
│   │   ├── SearchBar.jsx
│   │   └── Watchlist.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js

---

## ⚙️ Setup and Installation

1. Clone the repository
   git clone https://github.com/your-username/cine-track-movie-app.git
   cd cine-track-movie-app

2. Install dependencies
   npm install

3. Run development server
   npm run dev

4. Open in browser
   http://localhost:5173

---

## 📌 Milestones

| Milestone   | Description                 | Status      |
| ----------- | --------------------------- | ----------- |
| Milestone 1 | Project Setup & Structure   | ✅ Completed |
| Milestone 2 | API Integration & UI        | ✅ Completed |
| Milestone 3 | Search, Filter, Sort (HOFs) | ✅ Completed |
| Milestone 4 | Documentation & Deployment  | ✅ Completed |

---

## 👨‍💻 Developer

Azmol Wasim Hussain
B.Tech CSE (AI & ML)
Newton School of Technology, Pune

---

## ⭐ Final Note

This project demonstrates:

* API integration using fetch
* Use of JavaScript Array Higher-Order Functions
* State management in React
* UI/UX design and responsiveness
* Real-world feature implementation
