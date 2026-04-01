# 🎬 CineTrack - Movie Watchlist App

A responsive web application to search for movies and manage your personal watchlist, built with React and the OMDB API.

---

## 🚀 Live Demo
> Coming soon (Milestone 4 - Deployment)

---

## 🎯 Project Overview

CineTrack allows users to search for any movie in real-time using the OMDB public API and save their favorite movies to a personal watchlist — all in a clean, dark-themed UI inspired by platforms like Netflix and HBO Max.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js (Vite) | Frontend framework |
| JavaScript | Core logic |
| OMDB Public API | Movie data source |
| CSS | Styling and responsiveness |
| HTML | Structure |

---

## ✨ Features

- 🔍 **Live Movie Search** — Fetch real-time results from OMDB API
- 🎯 **Watchlist Toggle** — Add or remove movies from your personal list
- ⏳ **Loading State** — Spinner shown while data is being fetched
- ❌ **Error Handling** — Clear messages when no results are found
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- 🎭 **Empty States** — Friendly UI when watchlist or results are empty

---

## 🌐 API Used

**OMDB API** — [https://www.omdbapi.com/](https://www.omdbapi.com/)

- Free public API for movie, series, and episode data
- Used `fetch()` to make API calls
- Endpoint used: `https://www.omdbapi.com/?s={query}&apikey={key}`

---

## 📁 Folder Structure
```
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
```

---

## ⚙️ Setup and Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/cine-track-movie-app.git
cd cine-track-movie-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

---

## 📌 Milestones

| Milestone | Description | Status |
|---|---|---|
| Milestone 1 | Project Setup & Structure | ✅ Done |
| Milestone 2 | API Integration & Responsive UI | ✅ Done |
| Milestone 3 | Search, Filter & Sort (Array HOFs) | 🔜 Upcoming |
| Milestone 4 | Documentation & Deployment | 🔜 Upcoming |

---

## 👨‍💻 Developer

**Azmol Wasim Hussain**
Newton School Of Technology — Individual Project
