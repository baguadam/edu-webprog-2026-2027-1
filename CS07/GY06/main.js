// =======================================
// ENTITIES - erre a részre tekinthetünk úgy az alkalmazásban, mintha ez lenne a "Model" -> a játékban szereplő
// entitások adatait, tulajdonságait reprezentáljuk vele.

/*
A játékban szereplő objektumok közös ősosztálya. A cél, hogy tároljuk az entitások alapvető tulajdonságait, valamint
lehetőséget biztosítsunk a pozíciójuk módosítására. 
*/
class Entity {
  /*
    x: az entitás kezdeti x koordinátája
    y: az entitás kezdeti y koordinátája
    icon: az entitást reprezentáló ikon
    cssClass: az entitáshoz tartozó css stílusosztály
  */
  constructor(x, y, icon, cssClass) {
    this.x = x;
    this.y = y;
    this.icon = icon;
    this.cssClass = cssClass;
  }

  /*
    Módosítja az adott entitás pozícióját.

    x: a kívánt x koordináta
    y: a kívánt y koordináta
  */
  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
}

/*
  Leszármazunk az Entity osztályból, hogy definiáljuk a Player, Cop és Collectible osztályokat. Ha OOP szempontjából nézzük, akkor
  elég jó pattern: minden entitás tudja, amit tud az ősosztály, ha pedig valamelyiket szeretnénk külön tulajdonsággal bővíteni,
  nyugodtan megtehetjük itt. 
*/
class Player extends Entity {
  constructor(x, y) {
    super(x, y, "🐻", "player"); // meghívjuk az ősosztály konstruktorát
  }
}

class Cop extends Entity {
  constructor(x, y) {
    super(x, y, "🚔", "cop");
  }
}

class Collectible extends Entity {
  constructor(x, y) {
    super(x, y, "🍯", "collectible");
  }
}

// =======================================
// GRID - erre a részre tekinthetünk úgy, mintha ez lenne a "View" -> a játék grafikus felületét kezeli, fő feladata a négyzetrács
// létrehozása, a megfelelő cellék tartalmának a frissítése, a megjelenés törlése, cellaadatok lekérdezése. Ez ezen a ponton teljesen
// elkülönül a "Model"-től: nem tudja - és nem is kell tudnia -, hogy mit akarunk megjeleníteni a játéktáblán: csupán legenerálja
// a kért méretű táblát a kívánt root elembe, illetve a "setCell" segítségével egy adott cellának meg tudunk állítani szöveget (itt icon),
// plusz stílusosztályt. De ezen a ponton ezt meghívhatnám bármivel - modeltől függetlenül -, a cella megkapná azt.

/*
  Az osztály a játébtáblát kezeli
*/
class Grid {
  /*
    size: a rács sorainak és oszlopainak száma
    root: az a HTML-elem, amelyben a rács megjelenik
  */
  constructor(size, root) {
    this.size = size;
    this.root = root;
    // size x size méretű "mátrix" inicializálása
    this.cells = Array.from({ length: this.size }, () => Array(this.size));

    this.generate();
  }

  /*
    Először töröljük a gyökérelem tartalmát, majd CSS Grid segíségével meghatározzuk a rács sorainak és oszlopainak számát, méretét. 
    Ezt követően létrehozzuk a cellákat, mindegyikhez legenerálunk egy div elemet, ez megkapja a "cell" stílusosztályt.
    
    Azon felül, hogy ezt vizuálisan megjelenítjük, el is tároljuk a cells adattagban: ennek a célja, hogy a tábla mögé helyezzünk egy 
    mátrixot, ami egy az egyben tükrözi a tábla állapotát minden pillanatban.
  */
  generate() {
    this.root.innerHTML = "";
    this.root.style.gridTemplateColumns = `repeat(${this.size}, 30px)`;
    this.root.style.gridTemplateRows = `repeat(${this.size}, 30px)`;

    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        const div = document.createElement("div");
        div.classList.add("cell");
        this.root.appendChild(div);
        this.cells[i][j] = div;
      }
    }
  }

  /*
    A megadott koordinátájú cella tartalmának beállítja az icont, illetve ráteszi a kapott css stílusosztályt.

    x: a cella x koordinátája
    y: a cella y koordinátája
    icon: a cellába megjelenítendő icon (akát lehetne szöveg is, bármi)
    cssClass: a cellára rakandó css stílusosztály
  */
  setCell(x, y, icon, cssClass) {
    this.cells[x][y].textContent = icon;
    this.cells[x][y].className = cssClass;
  }

  /*
    Visszaadja az adott koordinátán található cellát.

    x: a cella x koordinátája
    y: a cella y koordinátája
  */
  getCell(x, y) {
    return this.cells[x][y];
  }

  /*
    Alapértelmezett állapotba állítja a cellákat, végigmegy az összesen, üresre teszi a tartalmat, visszaállítja a cell stílusosztályt.
  */
  clearCells() {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        this.cells[i][j].textContent = "";
        this.cells[i][j].className = "cell";
      }
    }
  }
}
// =======================================
// GAME - a program központi eleme, ez kapcsolja össze az entitásokat a megjelenéssel. Fontos megjegyezni, hogy nem csupán verérlőként
// működik, hanem a játékállapotot is ez tárolja. Szintén fontos megjegyezni, hogy mivel úgy írtük meg, hogy az üres cellák ellenőrzése
// a Grid osztályon keresztül történik, függ a játéklogika a megjelenéstől - ha szeretnénk, egyébként lehetne függetleníteni, ehhez az
// isOccupied metódust kellene módosítani.

/*  
  A játék vezérléséért és a játékállapot tárolásáért felel.
*/
class Game {
  /*
    size: a rács sorainak és oszlopainak száma
    root: az a HTML-elem, amelyben a rács megjelenik
    statusElement: az a HTML-elem, amiben státuszinformációkat akarunk megjeleníteni
    numOfCollectible: a gyűjthető objektumok száma 
  */
  constructor(size, root, statusElement, numOfCollectible) {
    this.size = size;
    this.root = root;
    this.statusElement = statusElement;
    this.numOfCollectible = numOfCollectible;

    this.grid = new Grid(this.size, this.root);
    this.player = null;
    this.cop = null;
    // a gyűjthető elemeket Map adatszerkezetben tároljuk - ez célrevezető itt, hiszen megfelelő kulccsal, amit
    // a koordinátákból fogunk képezni, könnyű elérést biztosítunk. Egyébként lehetne a játékost, rendőrt is hasonlóan
    // tárolni. Ha több rendőrrel dolgoznánk, ez célravezető lenne.
    this.collectibles = new Map();

    this.running = false; // fut-e jelenleg a játék, kezdetben false
    this.copTimer = null;
  }

  /*
    Helper methód, visszaadja, hogy egy adott cella foglalt-e bármilyen entitás által
    TODO: nem teljesen jó ez így, következő órán megbeszéljük, hogy miért nem :) Addig lehet gondolkodni, hogy mi lehet a gond...

    x: a cella x koordinátája
    y: a cella y koordinátája
  */
  isOccupied(x, y) {
    return !this.grid.getCell(x, y).classList.contains("cell");
  }

  /*
    Helper method, visszaad egy véletlenszerűen generált random (x, y) koordinátát. Addig generál, amíg nem talál szabad koordinátát.
    TODO: nyilván ez így nem túl safe, nyugodtan módosítsátok, refaktoráljátok
  */
  getRandomEmptyPosition() {
    let x = Math.floor(Math.random() * this.size);
    let y = Math.floor(Math.random() * this.size);
    while (this.isOccupied(x, y)) {
      x = Math.floor(Math.random() * this.size);
      y = Math.floor(Math.random() * this.size);
    }

    return [x, y];
  }

  /*
    A játék aktuális állapotának a megjelenítésért felel. Ezzel nagy előny, hogy a megjelenítés egyszerűen ezen a metóduson keresztül
    történik, így ha később változik a játékállapot, elég ezt meghívni. Tehát: amikor bármi változás történik a játékban, pl. lépünk
    a játékossal, lép a rendőr, felveszünk egy gyűjthető elemet, az első körben a játékállapotban és a modellben fog jelentkezni. Módosul, 
    a vizuális megjelenés alatt lévő réteg, változnak a pozíciók. Ezen a ponton szinkronba kell hozni azt, amit látunk, azzal, amit tárolunk.
    Ezt csinálja ez a method. Az aktuális játékállapot alapján újrarajzolja a táblát.
  */
  render() {
    this.grid.clearCells();
    this.grid.setCell(
      this.player.x,
      this.player.y,
      this.player.icon,
      this.player.cssClass,
    );
    this.grid.setCell(this.cop.x, this.cop.y, this.cop.icon, this.cop.cssClass);

    for (const object of this.collectibles.values()) {
      this.grid.setCell(object.x, object.y, object.icon, object.cssClass);
    }
  }

  /*
    A játék inicializálásért felel. Létrehozza az entitásokat, elhelyezi őket random pozíciókban, true-ra állítja a runningot, rederel.
    Később minden incializálás itt lesz, ami még hiányzik.
  */
  start() {
    this.running = true;

    // const [x, y] = this.getRandomEmptyPosition();
    this.player = new Player(...this.getRandomEmptyPosition());
    this.cop = new Cop(...this.getRandomEmptyPosition());
    for (let i = 0; i < this.numOfCollectible; i++) {
      const [x, y] = this.getRandomEmptyPosition();
      this.collectibles.set(`${x}${y}`, new Collectible(x, y));
    }

    this.render();
  }
}

// =======================================
// MAIN - a belépési pont. Bekérjük a szügséges HTML-elementeket, példányosítunk egy Game-et, meghívjuk a start() methodot. Innentől
// kezdve a játék "vezényli magát".
const root = document.querySelector("#grid");
const statusEl = document.querySelector("#status");
const game = new Game(10, root, statusEl, 5);
game.start();
