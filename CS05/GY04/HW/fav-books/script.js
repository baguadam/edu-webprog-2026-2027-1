// 1) Adatok — ezzel dolgozol
const books = [
  {
    id: 0,
    title: "Száz év magány",
    author: "Gabriel García Márquez",
    year: 1967,
    read: true,
  },
  {
    id: 1,
    title: "Mellettem elférsz",
    author: "Grecsó Krisztián",
    year: 2011,
    read: true,
  },
  {
    id: 2,
    title: "Apán üzent",
    author: "Grecsó Krisztián",
    year: 2024,
    read: false,
  },
  {
    id: 3,
    title: "Bűn és bűnhődés",
    author: "Fjodor Mihajlovics Dosztojevszkij",
    year: 1866,
    read: true,
  },
  {
    id: 4,
    title: "Colleen McCullough",
    author: "Tövismadarak",
    year: 1977,
    read: false,
  },
];

// == FELADATOK ==
// Feladat 1: Jelenítsd meg a könyveket az oldalon!
// - vedd be JS-be a "book-grid" id-val ellátott div elemet, ez lesz a szülő eleme a legenerált "article"-nek, ne felejtsd majd el hozzáfűzni a végén! (appendChild())
// - menj végig a tömbön, minden egyes könyvre hozz létre egy "article" HTML elemet!
// - add hozzá az elemhez a "card book-card" stílusosztályokat (használd a className propertyt!)
// - minden elem esetén állítsd be a data-id-t a az adott elem id-jára (használd a dataset propertyt!)
// - az elem belsejében található HTML (innerHTML) az alábbi legyen (ha nem "book" a ciklusváltozód, értelemszerűen módosítsd):

/* `<div class="badge ${book.read ? 'read' : 'unread'}">${book.read ? 'Elolvasva' : 'Várólista'}</div>
    <h3>${book.title}</h3>
    <div class="meta">
      <span>👤 ${book.author}</span>
      <span>📅 ${book.year}</span>
      <span>📖 ${book.pages} oldal</span>
    </div>` */

// - minden elem "click" eventjéhez adj hozzá egy eseménykezelőt, ami az alábbit csinálja:
//    - legyen egy globális "activeElemIndex" változód, ennek kezdeti értéke 0
//    - kattintáskor állítsd be az értékét a kattintott elem id-jára
//    - a showDetails() függvényt egészítsd ki a *****-ok között, úgy, hogy megkeresed az első elemet a tömbben, amelyiknek az id-ja megegyezik az eltárolt activeElemIndex értékkel. Legyen az így létrehozott változó neve "book" (mivel utána így használjuk)!
//    - hívd meg a showDetails() függvényt az eseménykezelőben, hogy az minden "click"-re lefusson

// **********************

// **********************

const details = document.querySelector("#details");
function showDetails() {
  // *********************

  // *********************
  if (!book) return;
  details.innerHTML = `
    <h2>${book.title}</h2>
    <p><strong>Szerző:</strong> ${book.author}</p>
    <p><strong>Kiadás éve:</strong> ${book.year}</p>
    <p><strong>Oldalszám:</strong> ${book.pages}</p>
    <p><strong>Státusz:</strong> ${
      book.read ? "Elolvasva ✅" : "Várólista 📖"
    }</p>
  `;
}
