import { Plus, Check, Calendar } from "lucide-react";

const PLACEHOLDER = "https://placehold.co/300x445/1a1a2e/white?text=No+Poster";

function MovieCard({ movie, onToggleWatchlist, isInWatchlist }) {
  const inList = isInWatchlist(movie.imdbID);

  return (
    <div className="movie-card">
      <div className="poster-wrapper">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : PLACEHOLDER}
          alt={movie.Title}
          className="movie-poster"
        />
        <span className="movie-type-badge">{movie.Type}</span>
      </div>

      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year">
          <Calendar size={13} />
          {movie.Year}
        </p>
      </div>

      <button
        className={`watchlist-btn ${inList ? "remove" : "add"}`}
        onClick={() => onToggleWatchlist(movie)}
      >
        {inList ? (
          <>
            <Check size={15} /> Remove
          </>
        ) : (
          <>
            <Plus size={15} /> Add to Watchlist
          </>
        )}
      </button>
    </div>
  );
}

export default MovieCard;