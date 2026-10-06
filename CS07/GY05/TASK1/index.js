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
const countSpan = document.querySelector("#count");

input.addEventListener("input", (event) => {
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(event.target.value.trim().toLowerCase()),
  );

  // TODO - 1
  // "ürítsd" ki a "containert" jelenlegi tartalmát (HINT: innerHTML)
  container.innerHTML = "";

  // TODO - 2
  // menj végig a filterezett filmeken:
  // - hozz létre mindegyikhez egy listaelemet
  // - a listaelem tartalma legyen a film címe
  // - fűzd be a filmet a "container"-be
  filteredMovies.forEach((movie) => {
    const li = document.createElement("li");
    li.textContent = movie.title;
    container.appendChild(li);
  });

  container.innerHTML = `
    ${filteredMovies.map((movie) => `<li>${movie.title}</li>`).join("")}
  `;

  // TODO - 3
  // határozd meg, hogy az adott keresésnél hány találat volt, írd be ezt a számot a "countSpan"-be
  countSpan.textContent = filteredMovies.length;
});
