import { Bookmark, List } from "lucide-react";
import MovieCard from "./MovieCard";

function Watchlist({ watchlist, onToggleWatchlist }) {
  return (
    <section className="watchlist-section">
      <h2>
        <List size={20} />
        My Watchlist <span className="count">({watchlist.length})</span>
      </h2>

      {watchlist.length === 0 ? (
        <div className="empty-watchlist">
          <Bookmark size={48} color="#2a2a4a" />
          <p>Your watchlist is empty. Start adding movies!</p>
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