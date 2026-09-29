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
const container = document.querySelector("#movieList");

// Ez volt az órai kód, direkt kommenzteztem ki, ez feltételezem megvan mindenkinek.
// Alatta mutatok egy "elegánsabb" megoldást a feladatra, figyelve a kódszervezésre is
// input.addEventListener("input", (event) => {
//   // process
//   const text = event.target.value.trim().toLowerCase();
//   const filteredMovies = movies.filter((movie) =>
//     movie.title.toLowerCase().includes(text),
//   );

//   // render
//   container.innerHTML = "";
//   filteredMovies.forEach((movie) => {
//     const li = document.createElement("li");
//     li.textContent = movie.title;
//     container.appendChild(li);
//   });
// });

// ============================================================
// Ha szeretnénk "szépen" szervezni ezt a kódot, én lehet, hogy inkább a következőképpen implementálnám:

// (tudom, hogy a movies globálisan elérhető, mégis... legyünk precízek, kérjük el paraméterként)
const filterMovies = (movies, pattern) => {
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(pattern.trim().toLowerCase()),
  );
};

// egy listaelem legenerálásáért felel, visszaad egy "HTML sablont"
const renderMovie = (title) => {
  return `
    <li>${title}</li>
  `;
};

// belegenerálja a listába az listaelemet minden filmre
const renderMovies = (container, movies) => {
  container.innerHTML = movies
    .map((movie) => renderMovie(movie.title))
    .join("");

  // miért kell a join("") a végére? Azért, mert a map itt egy tömböt ad vissza:
  /*
  [
    "<li>Alien</li>",
    "<li>Gladiator</li>",
    "<li>Heat</li>"
  ]
  */
  // join nélkül ebből a következő HTML generálódik:
  // <li>Alien</li>,<li>Gladiator</li>,<li>Heat</li>
  // a join viszont összefűzi a tömbelemeket egy stringgé, így join("") után lesz:
  // <li>Alien</li><li>Gladiator</li><li>Heat</li>
};

// eseménykezelő
input.addEventListener("input", (event) => {
  const filteredMovies = filterMovies(movies, event.target.value);
  renderMovies(container, filteredMovies);
});
