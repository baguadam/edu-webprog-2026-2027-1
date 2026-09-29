# Gyakorlás

## 1. feladat (Jegyzetkészítő alkalmazás)

Induljunk ki az alábbi HTML-ből:

```HTML
<h2 id="title">Jegyzeteim</h2>
<input type="text" id="titleInput" placeholder="Type a new title..." />
<label> <input type="checkbox" id="highlight" /> Cím kiemelése </label>
<button id="lockBtn">Cím lezárása</button>

<style>
    .highlight {
     background-color: yellow;
    }
</style>
```

1. Minden egyes alkalommal, amikor a felhasználó a szövegmezőbe gépel, a `h2` elem szövege változzon meg a beírt értékre (ha üres az szövegmező, adjunk egy `default` értéket a `h2`-nek)!
2. A checkbox bejelölésekor a `h2` elem kapja meg a `highlight` osztályt, a jelölés megszüntetésekor pedig tűnjön el az osztály!
3. A gombra kattintáskor a szövegmező legyen letiltva, a gomb felirata pedig változzon `Cím feloldása`-ra. Ekkor a szövegmező ismét legyen használható, a gomb felirata pedig vissza `Cím lezárása`-ra változzon! (`readonly` attribútum használata)

## 2. feladat (Kedvenc filmeim keresése)

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

## 3. feladat (Verdák):

```HTML
    <table id="table-characters" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Verdák</th>
          <th>Nem verdák</th>
          <th>Művelet</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="car">Villám McQueen</td>
          <td>Legolas</td>
          <td><button class="delete">×</button></td>
        </tr>
        <tr>
          <td class="car">Doc Hudson</td>
          <td>Optimus Prime</td>
          <td><button class="delete">×</button></td>
        </tr>
        <tr>
          <td class="car">Matuka</td>
          <td>Nyakkendős Macska</td>
          <td><button class="delete">×</button></td>
        </tr>
        <tr>
          <td class="car">Joe Komposztor</td>
          <td>Szulejman</td>
          <td><button class="delete">×</button></td>
        </tr>
        <tr>
          <td class="car">Sally</td>
          <td>Stohl András</td>
          <td><button class="delete">×</button></td>
        </tr>
      </tbody>
    </table>

<style>
  .highlight { background: #fffb91; }
  button.delete {
    background: #ef4444; color: white; border: none; border-radius: 4px;
    cursor: pointer; padding: 0.3em 0.6em;
  }
</style>
```

1. A `delete` gombra kattintva töröljük a megfelelő sort a táblázatból! HINT: ha cellára kattintok, melyik a legközelebbi elem hozzá? (`closest`)

1. A `car` osztályú cellára kattintva a cella kapja meg a `highlight` osztályt. Kattintáskor minden másik celláról el kell távolítani az osztályt! HINT: hogyan tudom megnézni, hogy ez bizonyos stílusosztállyal rendelkező cellára kattintottam-e?
