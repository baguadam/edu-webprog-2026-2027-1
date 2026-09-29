const movies = [
  {
    title: "The Matrix",
    year: 1999,
    length: 136,
    director: "Lana & Lilly Wachowski",
  },
  {
    title: "Inception",
    year: 2010,
    length: 148,
    director: "Christopher Nolan",
  },
  {
    title: "Interstellar",
    year: 2014,
    length: 169,
    director: "Christopher Nolan",
  },
  { title: "Parasite", year: 2019, length: 132, director: "Bong Joon-ho" },
  {
    title: "Spirited Away",
    year: 2001,
    length: 125,
    director: "Hayao Miyazaki",
  },
  { title: "Amélie", year: 2001, length: 122, director: "Jean-Pierre Jeunet" },
  {
    title: "The Godfather",
    year: 1972,
    length: 175,
    director: "Francis Ford Coppola",
  },
  { title: "Casablanca", year: 1942, length: 102, director: "Michael Curtiz" },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    length: 108,
    director: "Michel Gondry",
  },
  { title: "Whiplash", year: 2014, length: 106, director: "Damien Chazelle" },
];

const input = document.querySelector("#filter");

input.addEventListener("input", (event) => {
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(event.target.value.trim().toLowerCase()),
  );

  // foreach --- innen folytatjuk következő alkalommal
});
