import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import Watchlist from "./components/Watchlist";
import { Film } from "lucide-react";
import "./App.css";

const API_KEY = "f286f7c8";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [filterType, setFilterType] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(saved);

    const theme = localStorage.getItem("theme");
    if (theme === "light") setDarkMode(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const searchMovies = async (query) => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setSearched(true);

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`
      );
      const data = await res.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error || "No movies found.");
      }
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const toggleWatchlist = (movie) => {
    setWatchlist((prev) => {
      const exists = prev.find((m) => m.imdbID === movie.imdbID);
      if (exists) return prev.filter((m) => m.imdbID !== movie.imdbID);
      return [...prev, movie];
    });
  };

  const isInWatchlist = (id) =>
    watchlist.some((m) => m.imdbID === id);

  const processedMovies = movies
    .filter((m) => (!filterType ? true : m.Type === filterType))
    .sort((a, b) => {
      if (sortOption === "year") return Number(a.Year) - Number(b.Year);
      if (sortOption === "az") return a.Title.localeCompare(b.Title);
      return 0;
    });

  return (
    <div className="app">
      <header className="header">
        <Film size={40} />
        <h1>CineTrack</h1>
        <p>Search movies and build your watchlist</p>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <SearchBar onSearch={searchMovies} />

      <div className="controls">
        <select onChange={(e) => setFilterType(e.target.value)}>
          <option value="">All</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
        </select>

        <select onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort</option>
          <option value="year">By Year</option>
          <option value="az">A-Z</option>
        </select>
      </div>

      {loading && <p className="loading-text">Loading...</p>}
      {error && <p className="error-msg">{error}</p>}

      {!loading && searched && processedMovies.length === 0 && !error && (
        <p className="empty-state">No movies found</p>
      )}

      {processedMovies.length > 0 && (
        <MovieGrid
          movies={processedMovies}
          onToggleWatchlist={toggleWatchlist}
          isInWatchlist={isInWatchlist}
        />
      )}

      <Watchlist watchlist={watchlist} onToggleWatchlist={toggleWatchlist} />
    </div>
  );
}

export default App;