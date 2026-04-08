import { Bookmark, List } from "lucide-react";
import MovieCard from "./MovieCard";

function Watchlist({ watchlist, onToggleWatchlist }) {
  const getRandomMovie = () => {
    if (watchlist.length === 0) return;
    const random =
      watchlist[Math.floor(Math.random() * watchlist.length)];
    alert(`Watch: ${random.Title}`);
  };

  return (
    <section className="watchlist-section">
      <h2>
        <List size={20} />
        My Watchlist ({watchlist.length})
      </h2>

      {watchlist.length > 0 && (
        <button onClick={getRandomMovie} className="random-btn">
          Random Movie
        </button>
      )}

      {watchlist.length === 0 ? (
        <div className="empty-watchlist">
          <Bookmark size={40} />
          <p>No movies added</p>
        </div>
      ) : (
        <div className="movie-grid">
          {watchlist.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onToggleWatchlist={onToggleWatchlist}
              isInWatchlist={() => true}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Watchlist;