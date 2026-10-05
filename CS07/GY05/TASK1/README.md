## 1. feladat (Kedvenc filmeim keresése)

Készítsünk egy alkalmazás, ami segíségével kedvenc filmjeinkre tudunk keresni! Az alkalmazás mindig csak azokat a filmeket jelenítse meg, amelyek címében szerepel a keresett kifejezés! A keresés legyen `case insensitive`! Induljunk ki az alábbi HTML-ből:

```HTML
<div class="wrap">
  <h1>Filmlista</h1>

  <label for="filter">Szűrés cím szerint</label>
  <input id="filter" type="text" placeholder="Kezdj el gépelni…" autocomplete="off" />

  <p class="muted"><span id="count">0</span> találat</p>

  <ul id="movieList" aria-label="Film címek"></ul>
</div>
```

És az alábbi filmekből:

```JS
  const movies = [
    { title: "The Matrix", year: 1999, length: 136, director: "Lana & Lilly Wachowski" },
    { title: "Inception", year: 2010, length: 148, director: "Christopher Nolan" },
    { title: "Interstellar", year: 2014, length: 169, director: "Christopher Nolan" },
    { title: "Parasite", year: 2019, length: 132, director: "Bong Joon-ho" },
    { title: "Spirited Away", year: 2001, length: 125, director: "Hayao Miyazaki" },
    { title: "Amélie", year: 2001, length: 122, director: "Jean-Pierre Jeunet" },
    { title: "The Godfather", year: 1972, length: 175, director: "Francis Ford Coppola" },
    { title: "Casablanca", year: 1942, length: 102, director: "Michael Curtiz" },
    { title: "Eternal Sunshine of the Spotless Mind", year: 2004, length: 108, director: "Michel Gondry" },
    { title: "Whiplash", year: 2014, length: 106, director: "Damien Chazelle" },
  ];
```

1. A keresőmezőbe gépeléskor a `movieList` elemet töltsük fel a keresett kifejezésnek megfelelő filmekkel! Ha nincs találat, akkor jelenítsük meg a `Nincs találat` üzenetet!
2. A találatok számát jelenítsük meg a `count` span elemben!