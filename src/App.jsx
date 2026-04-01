import { useState } from "react";
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

  const searchMovies = async (query) => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setSearched(true);
    setMovies([]);

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`
      );
      const data = await res.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error || "No movies found.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
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

  const isInWatchlist = (imdbID) => watchlist.some((m) => m.imdbID === imdbID);

  return (
    <div className="app">
      <header className="header">
        <div className="header-icon">
          <Film size={40} color="#e94560" />
        </div>
        <h1>CineTrack</h1>
        <p>Search movies and build your personal watchlist</p>
      </header>

      <main className="main-content">
        <SearchBar onSearch={searchMovies} />

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Fetching movies...</p>
          </div>
        )}

        {error && <div className="error-msg">{error}</div>}

        {!loading && searched && movies.length === 0 && !error && (
          <div className="empty-state">
            No movies found. Try a different search!
          </div>
        )}

        {movies.length > 0 && (
          <MovieGrid
            movies={movies}
            onToggleWatchlist={toggleWatchlist}
            isInWatchlist={isInWatchlist}
          />
        )}

        <Watchlist watchlist={watchlist} onToggleWatchlist={toggleWatchlist} />
      </main>
    </div>
  );
}

export default App;