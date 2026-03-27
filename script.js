const API_KEY = "f286f7c8";

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const movieContainer = document.getElementById("movieContainer");
const loading = document.getElementById("loading");


const watchlistContainer = document.getElementById("watchlistContainer");


let currentMovies = [];


let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

async function fetchMovies(query) {
  try {

    loading.classList.remove("hidden");
    const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const data = await res.json();
    loading.classList.add("hidden");

    displayMovies(data.Search);

  } catch (error) {
    console.log("Error:", error);
    loading.classList.add("hidden");
  }
}

function displayMovies(movies) {
  movieContainer.innerHTML = "";

  currentMovies = movies;

  if (!movies) {
    movieContainer.innerHTML = "<p>No movies found</p>";
    return;
  }

  movies.forEach(movie => {

    const card = document.createElement("div");
    card.className = "movie-card";

    card.innerHTML = `

      <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"}">
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
      <button onclick="toggleWatchlist('${movie.imdbID}')">
        ${isInWatchlist(movie.imdbID) ? "Remove" : "Add"}
      </button>
    `;

    movieContainer.appendChild(card);
  });
}


function isInWatchlist(id) {
  return watchlist.find(movie => movie.imdbID === id);
}


function toggleWatchlist(id) {
  const exists = watchlist.find(movie => movie.imdbID === id);

  if (exists) {
    watchlist = watchlist.filter(movie => movie.imdbID !== id);
  } else {
    const movie = currentMovies.find(movie => movie.imdbID === id);
    watchlist.push(movie);
  }

  localStorage.setItem("watchlist", JSON.stringify(watchlist));

  renderWatchlist();
  displayMovies(currentMovies);
}

function renderWatchlist() {
  if (watchlist.length === 0) {
    watchlistContainer.innerHTML = "<p>No saved movies</p>";
    return;
  }

  watchlistContainer.innerHTML = watchlist.map(movie => `
    <div class="saved-item">
      <p>${movie.Title}</p>
      <button onclick="toggleWatchlist('${movie.imdbID}')">Remove</button>
    </div>
  `).join("");
}

function filterMovies(type) {

  const filtered = currentMovies.filter(movie => movie.Type === type);

  displayMovies(filtered);
}

function sortMovies() {
  const sorted = [...currentMovies].sort((a, b) => a.Year - b.Year);

  displayMovies(sorted);
}
function debounce(fn, delay) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

const debouncedSearch = debounce(fetchMovies, 500);

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();

  if (query.length > 2) {
    debouncedSearch(query);
  }
});

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  fetchMovies(query);
});

renderWatchlist();