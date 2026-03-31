const API_KEY = "f286f7c8";

const inputBox = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const movieBox = document.getElementById("movieContainer");
const loadingText = document.getElementById("loading");
const watchBox = document.getElementById("watchlistContainer");
const randomBtn = document.getElementById("randomBtn");

let moviesData = [];
let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];


async function getMovies(name) {
  loadingText.classList.remove("hidden");

  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${name}`);
    const data = await res.json();

    loadingText.classList.add("hidden");

    if (data.Response === "False") {
      movieBox.innerHTML = "<p>No movies found</p>";
      return;
    }

    moviesData = data.Search;
    showMovies(moviesData);

  } catch (err) {
    console.log(err);
    loadingText.classList.add("hidden");
  }
}

function showMovies(list) {
  movieBox.innerHTML = "";

  list.forEach(function (movie) {

    let div = document.createElement("div");
    div.className = "movie-card";

    let btnText = "Add";

    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].imdbID === movie.imdbID) {
        btnText = "Remove";
      }
    }

    div.innerHTML = `
      <img src="${movie.Poster !== "N/A" ? movie.Poster : ""}">
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
      <button data-id="${movie.imdbID}">${btnText}</button>
    `;

    div.querySelector("button").addEventListener("click", function () {
      handleWatchlist(movie.imdbID);
    });

    movieBox.appendChild(div);
  });
}

function handleWatchlist(id) {

  let found = false;

  for (let i = 0; i < watchlist.length; i++) {
    if (watchlist[i].imdbID === id) {
      watchlist.splice(i, 1);
      found = true;
      break;
    }
  }

  if (!found) {
    for (let i = 0; i < moviesData.length; i++) {
      if (moviesData[i].imdbID === id) {
        watchlist.push(moviesData[i]);
      }
    }
  }

  localStorage.setItem("watchlist", JSON.stringify(watchlist));

  renderWatchlist();
  showMovies(moviesData);
}


function renderWatchlist() {
  watchBox.innerHTML = "";

  if (watchlist.length === 0) {
    watchBox.innerHTML = "<p>No saved movies</p>";
    return;
  }

  watchlist.forEach(function (movie) {
    let div = document.createElement("div");
    div.className = "saved-item";

    div.innerHTML = `
      <p>${movie.Title}</p>
      <button data-id="${movie.imdbID}">Remove</button>
    `;

    div.querySelector("button").addEventListener("click", function () {
      handleWatchlist(movie.imdbID);
    });

    watchBox.appendChild(div);
  });
}

searchBtn.addEventListener("click", function () {
  let value = inputBox.value.trim();
  if (value !== "") {
    getMovies(value);
  }
});


let timer;

inputBox.addEventListener("input", function () {
  let value = inputBox.value.trim();

  clearTimeout(timer);

  timer = setTimeout(function () {
    if (value.length > 2) {
      getMovies(value);
    }
  }, 400);
});


function filterMovies(type) {
  let arr = moviesData.filter(function (m) {
    return m.Type === type;
  });

  showMovies(arr);
}


function sortMovies() {
  let arr = [...moviesData];

  arr.sort(function (a, b) {
    return a.Year - b.Year;
  });

  showMovies(arr);
}

randomBtn.addEventListener("click", function () {
  if (watchlist.length === 0) {
    alert("No movies in watchlist");
    return;
  }

  let index = Math.floor(Math.random() * watchlist.length);
  let movie = watchlist[index];

  alert("Tonight watch: " + movie.Title);
});


renderWatchlist();