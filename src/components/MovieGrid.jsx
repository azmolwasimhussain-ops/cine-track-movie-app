import MovieCard from "./MovieCard";

function MovieGrid({ movies, onToggleWatchlist, isInWatchlist }) {
  return (
    <section className="movie-section">
      <h2>🔎 Search Results <span className="count">({movies.length})</span></h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onToggleWatchlist={onToggleWatchlist}
            isInWatchlist={isInWatchlist}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieGrid;