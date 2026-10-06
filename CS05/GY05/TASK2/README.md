# Maci-Laci

A gyakorlaton a "jól ismer" Maci-Laci játékot fogjuk elkészíteni. Az alap cél, hogy dinamikusan le tudjuk generálni a játéktáblát, a játékos képes legyen lépkedni a táblán, pontokat tudjon gyűjteni azáltal, hogy összeszedi a lehelyezett objektumokat. Mindeközben pedig egy rendőr járőrözik a játéktáblán, másodpercneként lépve egyet. Ha Maci-Laci és a rendőr találkoznak, akkor a játék végetér vereséggel. Ha begyűjötttük az összes objektumot, akkor pedig mi győztünk!

## Entitások

A játékban a következő entitások vannak jelen:

- `Player` (Maci-Laci): a játékos karaktere, akit a felhasználó irányít a billentyűzet segítségével.
- `Cop` (Rendőr): automatikusan mozog a játéktáblán, és ha találkozik a játékkal, akkor végetér a játék.
- `Collectible` (Gyűjthető objektum): olyan tárgyak, amelyeket a játékos összegyűjthet, hogy pontokat szerezzen.

Hozzunk létre egy `Entity` base class-t, amit az entitások fölé helyezünk. Ez rendelkezzen az alábbi adatagokkal és metódusokkal:

Adattagok:

- `x` és `y` koordináták: az entitás pozícióját jelölik a játéktáblán.
- `icon`: a karakter szimbóluma, amit megjelenítünk a táblán.
- `cssClass`: a karakterhez tartozó CSS osztály neve, amit a stílusokhoz használunk.

Metódusok:

- `setPosition(x, y)`: egy metódus, ami beállítja az entitás pozícióját a megadott koordinátákra.

Származzunk le ebből a class-ból a `Player`, `Cop` és `Collectible` osztályokat, és mindegyikben definiáljuk a saját specifikus tulajdonságokat és viselkedést.

## Grid

Készítsünk egy `Grid` osztályt, ami a játéktáblát reprezentálja. Az osztály az alábbi adattagokat és metódusokat tartalmazza:

Adattagok:

- `size`: a tábla mérete (például 10x10 esetén 10).
- `root`: a DOM elem, amiben a tábla megjelenik.
- `cells`: egy kétdimenziós tömb, ami a tábla celláit reprezentálja.

Metódusok:

- `generate()`: egy metódus, ami létrehozza a tábla HTML struktúráját a `root` elemben.
- `getCell(x, y)`: egy metódus, ami visszaadja a cella DOM elemét a megadott koordináták alapján.
- `setCell(x, y, icon, cssClass)`: egy metódus, ami beállítja a cella tartalmát és stílusát a megadott koordináták alapján.
- `clearCell(x, y)`: egy metódus, ami törli a cella tartalmát és stílusát a megadott koordináták alapján.

### 1.

Írjuk meg a konstruktort megfelelően, ne felejtsük el meghívni a `generate()` metódust a tábla létrehozásához.

### 2.

Implementáljuk a `generate()` metódust, ennek a lépései nagyjából:

- "Ürítsük ki" a `root` elemet.
- Generáljunk le egy `size x size` méretű táblát, ehhez érdemes most az alábbi kódot használni:

```js
this.root.style.gridTemplateColumns = `repeat(${this.size}, 30px)`;
this.root.style.gridTemplateRows = `repeat(${this.size}, 30px)`;

// Itt "CSS Grid instructions" van használatban, ami a "display: grid" stílus miatt megfelelően le fog generálni
// 10 darab sort és 10 darab oszlopot, mindegyik 30 pixel széles és magas lesz. Nyilván működne az is, ha táblázatot
// hozunk létre, de a CSS Grid sokkal kényelmesebb és modernebb megoldás erre most.
```

- Generáljuk le az üres játéktáblát a `cells` tömb "üres" feltöltésével, ehhez használjuk az `Array.from()` metódust megfelelő mérettel és mapping functionnel!
- Generáljunk `size * size` darab `div` elemet, amik a cellák lesznek, adjuk hozzájuk a `cell` stílusosztályt, appendeljük a `root` elemhez, és mentsük el őket a `cells` tömb megfelelő helyére.

### 3.

Implementáljuk a `clearCell()` metódust, itárjulnk végig a `cells` tömbön, minden cellát ürítsünk ki és tegyük rájuk vissza az alapértelmezett `cell` osztályt.

### 4.

Implementáljuk a `setCell(x, y, icon, cssClass)` metódust, ami a megadott koordinátájú cellát beállítja a megadott ikonra és css osztályra.

### 5.

Implementáljuk a `getCell(x, y)` metódust, ami visszaadja a megadott koordinátájú cella DOM elemét.

## Game

Készítsük el a `Game` osztályt, ami a játék logikáját kezeli, itt áll össze minden. Az osztály az alábbi adattagokat és metódusokat tartalmazza:

Adattagok:

- `size`: a játéktábla mérete, hasonlóan a `Grid` osztályhoz.
- `grid`: a `Grid` osztály egy példánya, ami a játéktáblát kezeli.
- `statusElelement`: a DOM elem, amiben a játék állapotát jelenítjük meg (pl. pontszám, játék vége üzenet).
- `numCollectibles`: a gyűjthető objektumok száma a táblán.
- `player`: a `Player` osztály egy példánya, ami a játékost reprezentálja.
- `cop`: a `Cop` osztály egy példánya, ami a rendőrt reprezentálja.
- `collectibles`: egy Map, ami a gyűjthető objektumokat tárolja a pozíciójuk alapján készített kulccsal, pl `${}x}-${y}`.
- `running`: egy boolean érték, ami jelzi, hogy a játék folyamatban van-e.
- `_copTimer`: egy privát adattag, ami a rendőr mozgását vezérlő időzítőt tárolja.

Metódusok:

- `start()`: egy metódus, ami elindítja a játékot, inicializálja a játéktáblát, elhelyezi az entitásokat, és beállítja a billentyűzet eseménykezelőket.
- `end(result)`: egy metódus, ami befejezi a játékot, megállítja a rendőr mozgását, és frissíti a játék állapotát a megadott eredménnyel (pl. "win" vagy "lose").
- `stopCop()`: egy metódus, ami megállítja a rendőr mozgását.
- `setStatus(message)`: egy metódus, ami frissíti a játék állapotát a megadott üzenettel.
- `isBoundary(x, y)`: egy metódus, ami ellenőrzi, hogy a megadott koordináták a játéktábla határain belül vannak-e.
- `isOccupied(x, y)`: egy metódus, ami ellenőrzi, hogy a megadott koordinátákon van-e már entitás (játékos, rendőr vagy gyűjthető objektum).
- `getRandomEmptyPosition()`: egy metódus, ami visszaad egy véletlenszerűen kiválasztott üres pozíciót a játéktáblán.
- `movePlayer(dx, dy)`: egy metódus, ami megpróbálja elmozdítani a játékost a megadott irányba (dx, dy), és kezeli az ütközéseket a gyűjthető objektumokkal és a rendőrrel.
- `moveCop()`: egy metódus, ami véletlenszerűen elmozdítja a rendőrt egy szomszédos cellába, és kezeli az ütközést a játékkal.
- `render()`: egy metódus, ami frissíti a játéktábla megjelenítését az aktuális entitások pozíciói alapján.
- `_onKeyDown(event)`: egy privát metódus, ami kezeli a billentyűzet eseményeket, és meghívja a `movePlayer()` metódust a megfelelő irányba.

### 1.

Írjuk meg a konstruktort megfelelően, ne felejtsük el inicializálni a `grid` példányt és a `collectibles` Map-et. A `running` értékét állítsuk `false`-ra, a `_copTimer` értékét pedig `null`-ra.

### 2.

Implementáljuk az `isOccupied(x, y)` metódust, ami ellenőrzi, hogy a megadott koordinátán van-e már entitás. (Pl: ha van player, és a megadott x, y megegyezik a player x, y értékkel, akkor true-t ad vissza. a Map esetén egyszerűen ellenőrizzük, van-e ilyen kulcs a Map-ben)

### 3.

Implementáljuk a `getRandomEmptyPosition()` metódust, ami véletlenszerűen generál x és y értékeket a tábla méretén belül, és addig ismétli ezt, amíg nem talál egy üres pozíciót (az `isOccupied()` metódus segítségével).

```js
Math.floor(Math.random() * this.size);
```

### 4.

Implementáljuk a `render()` metódust, ami először meghívja a `grid.clearCell()` metódust, majd beállítja a player, cop és collectibles pozícióit a `grid.setCell()` metódus segítségével. (for...of ciklussal végigmehetünk a Map-en is!)

### 5.

Implementáljuk a `start()` metódust, ami elindítja a játékot:

- Állítsuk a `running` értékét `true`-ra.
- Ürítsük ki a `collectibles` Map-et.
- Ürítsük ki a `grid`-et.
- Hozzuk létre a `player` és `cop` entitásokat véletlenszerű pozíciókkal (a `getRandomEmptyPosition()` metódus segítségével).
- Hozzuk létre a `numCollectibles` darab `Collectible` entitást véletlenszerű pozíciókkal, és mentsük el őket a `collectibles` Map-be. (set metódus segítségével tudunk hozzáadni értékeket a Map-hez)
- Állítsuk be a `_copTimer` értékét egy `setInterval()` hívással, ami másodpercenként meghívja a `moveCop()` metódust. (egyelőre csak írjunk egy console.log-ot a moveCop metódusba)
- Adjunk a window objektumhoz egy `keydown` eseményhallgatót, ami a `_onKeyDown()` metódust hívja meg, egyelőre itt is csak egy console.log-ot írjunk ki az esemény objektumból.
- Állítsuk be a státusz elemet egy kezdő üzenetre, pl "Játék elkezdődött!".
- Hívjuk meg a `render()` metódust a kezdeti állapot megjelenítéséhez.
