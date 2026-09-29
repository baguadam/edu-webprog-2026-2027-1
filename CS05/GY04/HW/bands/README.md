# Turnémenedzser Alkalmazás

Készítsünk egy mini alkalmazást, ahol legendás együttesek és dalaik szerepelnek. A felhasználó legyen képes kezelni a zenekarokat és a dalaikat. Tudjuk kijelölni a kedvenceinket, törölni azt, stb.

1. Indulj ki az alábbi adatokból:

```js
const bands = [
  {
    key: "gnr",
    name: "Guns N' Roses",
    origin: "USA",
    genre: "Hard Rock",
    founded: 1985,
    songs: [
      { title: "Welcome to the Jungle", year: 1987 },
      { title: "Sweet Child o' Mine", year: 1987 },
      { title: "November Rain", year: 1991 },
    ],
  },
  {
    key: "queen",
    name: "Queen",
    origin: "UK",
    genre: "Rock",
    founded: 1970,
    songs: [
      { title: "Bohemian Rhapsody", year: 1975 },
      { title: "We Will Rock You", year: 1977 },
    ],
  },
  {
    key: "zeppelin",
    name: "Led Zeppelin",
    origin: "UK",
    genre: "Hard Rock",
    founded: 1968,
    songs: [{ title: "Stairway to Heaven", year: 1971 }],
  },
  {
    key: "acdc",
    name: "AC/DC",
    origin: "Australia",
    genre: "Hard Rock",
    founded: 1973,
    songs: [{ title: "Back in Black", year: 1980 }],
  },
];
```

A HTML-ben legyen egy `ul` konténer a zenekaroknak:

```HTML
<ul id="bands"></ul>
```

1. Dinamikusan generáld le az alábbi struktúrát minden zenekarra, minden egyes ilyen legenerált `li` elemet fűzz hozzá a `#bands` konténerhez:

HINT: az itt megadott HTML segítség, hogy a "végén" így kellene kinéznie. De egyébként is érdemes így gondolkodni azokban a feladatokban, ahol dinamikusan kell HTML-t generálni: rakd össze előbb statikus a struktúráta html fájlban - segít, hogy mit kellene létrehozni a JS-ben.

```HTML
<li data-origin="USA" data-genre="Hard Rock" data-founded="1985" data-key="gnr">
    <h2 class="band-name">Guns N' Roses</h2>
    <ul class="songs">
        <li data-year="1987">Welcome to the Jungle <button class="delete">❌</button></li>
        <li data-year="1987">Sweet Child o' Mine <button class="delete">❌</button></li>
        <li data-year="1991">November Rain <button class="delete">❌</button></li>
    </ul>
</li>
```

Az EGYETLEN (NOTE: tehát delegálni kell) `click` eseménykezelőt a `#bands` konténerre helyezd el:

- ha `bandanévre` kattintunk, a banda kijelölődik (kap egy `.selected` stílusosztályt), a többi banda kijelölése megszűnik (eltávolítod a `.selected` osztályt a többiről)!
- ha a `dal címére` kattintunk, a dal kedvenc lesz (kap egy `.favorite` stílusosztályt), a többi dal kedvenc státusza megszűnik (eltávolítod a `.favorite` osztályt a többiről)!
- ha a `❌ gombra` kattintunk, a dal törlődik a listából! Gondold végig, hogyan tudjuk ezt megoldani (spoiler: ha megvan, hogy melyik gombra kattintottunk, le tudjuk kérdezni, hogy hozzá melyik a legközelebb eső `<li>` elem, ehhez használható a `closest()` -- keress rá, hogyan kell használni. Ha megvan a legközelebbi `<li>` elem, azt utána eltávolíthatjuk egyszerűen a `remove()`-val -- szintén nézz utána!)

FONTOS, hogy a stílusokat neked kell megírnod CSS-ben, tehát a `.selected` és `.favorite` osztályokhoz is adj meg valamilyen stílust, hogy vizuálisan is látszódjon a változás, ez lehet akár egy halvány háttérszínváltozás is csak, hogy lásd, hogy működik a dolog.
