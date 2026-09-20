# 3. gyakorlat

1. Eseménykezelés alapjai
2. Komplexebb eseménykezelés
3. Delegálás

## Eseménykezelés alapjai

Hozzunk létre egy gombot. Nézzük meg, hogyan tudjuk elérni, hogy kattintásra különböző "dolgok" végrehajtódjanak az oldalon:

- Felugrik egy `alarm` üzenet.
- Megjelenik a gomb alatt egy `p` tag valamilyen szöveggel
- Gombra kattintva ráteszünk a fentebb létrehozott `p` tagre bizonyos stílusosztályt
- Oldjuk meg, hogy kattingatásra ezek a stílusosztályok rákerüljenek/eltűnjenek a gombról

### FOO

Induljunk ki az alábbi, ismert magyar zenekarokat tartalmazó tömbből!

```js
const bands = [
  {
    name: "Quimby",
    city: "Budapest",
    formed: 1991,
    active: true,
    members: 6,
    albums: [
      { title: "Morze", year: 1995 },
      { title: "Kicsi ország", year: 2010 },
      { title: "Parazita", year: 2016 },
    ],
  },
  {
    name: "Kispál és a Borz",
    city: "Pécs",
    formed: 1987,
    active: false,
    members: 4,
    albums: [
      { title: "Föld kaland ilyesmi", year: 1993 },
      { title: "Sika, kasza, léc", year: 1995 },
      { title: "Turisták bárhol", year: 2003 },
    ],
  },
  {
    name: "30Y",
    city: "Pécs",
    formed: 2000,
    active: true,
    members: 5,
    albums: [
      { title: "Csészényi tér", year: 2004 },
      { title: "Semmi szédítő magasság", year: 2006 },
      { title: "Dicsőség", year: 2010 },
    ],
  },
  {
    name: "hiperkarma",
    city: "Budapest",
    formed: 2000,
    active: true,
    members: 4,
    albums: [
      { title: "hiperkarma", year: 2000 },
      { title: "konyharegény", year: 2014 },
      { title: "amondó", year: 2019 },
    ],
  },
];
```

1. Készítsünk egy konténer `<div>`-et az oldal HTML-jében (pl. `id="bandContainer"`).
2. Vegyük be JS-be a `bands` tömböt és a konténer elemet
3. Iteráljunk végig a `bands` tömbön és minden zenekarhoz hozzunk létre egy új `div`-et. A div tartalmazza `h3` tagben a banda nevét, `p` tagekben a várost és az alapítás évét.
4. Ha a banda még aktív, a háttérszín legyen `lightgreen`, ha már nem aktív, legyen `lightgray`.
5. Adjuk hozzá `style` tagek között az alábbi stílusosztály, majd rendeljük hozzá minden kártyához:

```css
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
}
```

6. Minden kártyához állítsuk be `data-name` attribútomként a banda nevét.
7. Fűzzünk be minden elemet a konténerbe!

## Komplexebb eseménykezelés

### 1. feladat

Adott egy paragrafusbeli szöveg, amelyben néhány szó `span` elembe van foglalva vagy hivatkozásként van megadva. A paragrafusra kattintáskor írd ki a konzolra:

- az eseményt jelző objektumot;
- az esemény típusát;
- a kattintás közben lenyomott egérgombot;
- az egér kattintáskori pozícióját;
- az eseményt eredetileg jelző objektumot;
- `span` elemre kattintva a `span` elem szövegét.
- ha a hivatkozás szövege "libero", akkor ne kövesse a hivatkozást.
- módosítsuk az implementációt úgy, hogy `dupla kattintással`, majd pedig `jobb egérgombbal` működjön

### 2. feladat (Jegyzetkészítő alkalmazás)

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

## Delegálás

> ### 💡 EVENT BUBBLING
>
> Amikor egy esemény, például egy `kattintás` bekövetkezik egy elementen, az esemény "buborékol" fel a DOM fa szerkezetén keresztül, elérve a szülő elemeket. Ez azt jelenti, hogy ha egy gyermek elemre kattintunk, az esemény először a gyermek elemre hat, majd tovább terjed a szülő elemekre egészen a `document` gyökér elemig.
>
> Ez a viselkedés lehetővé teszi, hogy egyetlen eseménykezelőt alkalmazzunk egy szülő elemre, amely kezeli az összes gyermek elem eseményeit. Ez különösen hasznos dinamikusan létrehozott elemek esetén, ahol nem tudjuk előre, hány gyermek elem lesz jelen a DOM-ban.

> ### 💡 DELEGATION
>
> Az esemény delegálás egy olyan technika, amely kihasználja az esemény buborékolását a DOM-ban. Ahelyett, hogy minden egyes gyermek elemhez külön eseménykezelőt adnánk hozzá, egyetlen eseménykezelőt helyezünk el a szülő elemre. Amikor egy gyermek elemre kattintanak, az esemény "buborékol" fel a szülő elemhez, ahol az eseménykezelő meghívódik.

### 1. feladat

Induljunk ki az alábbi HTML-ből:

```HTML
<table id="grades" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Name</th>
      <th>Subject</th>
      <th>Grade</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>Math</td>
      <td class="grade">5</td>
      <td><button class="delete">×</button></td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>History</td>
      <td class="grade">4</td>
      <td><button class="delete">×</button></td>
    </tr>
    <tr>
      <td>Charlie</td>
      <td>Science</td>
      <td class="grade">3</td>
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

1. A `delete` gombra kattintva töröljük a megfelelő sort a táblázatból!
2. A `grade` osztályú cellára kattintva a cella kapja meg a `highlight` osztályt. Kattintáskor minden másik celláról el kell távolítani az osztályt!

### 2. feladat (Színező)

Készítsünk egy színező alkalmazást, amelyben egy 20x20-as rács és egy színválasztó látható. A rács elemeire kattintva a kiválasztott színnel kitölthetjük az adott elemet. Oldjuk meg azt is, hogy `jobbklikkel` egy elem színét törölni tudjuk! A teljes tartalmat (így beleértve a színválasztót és a táblázatot) teljesen dinamikusan hozzuk létre JavaScript segítségével! Használjuk az alábbi CSS-t:

```css
table {
  margin: 0px auto;
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  width: 25px;
  height: 25px;
}
input {
  margin: 0px auto;
  display: block;
}
```
