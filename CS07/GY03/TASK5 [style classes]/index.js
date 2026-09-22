const clickButton = document.querySelector("#click-button");
const container = document.querySelector(".container");

// Eddig úgy dolgoztunk a stílusokkal, hogy közvetlenül a "style" propertyn keresztül állítottunk be bizonyos dolgokat:
// mi legyen a háttérszín, milyen szövegszín legyen, stb. Ezen felül képesek vagyunk dinamikusan hozzáadni, levenni stílusosztályokat.

// Figyeld meg, hogy kezdetben a div.container-en nincs semmilyen stílusosztály. Adjuk hozzá itt az "initial" stílusosztályt (lásd: HTML)
// Ezt a classList propertyn keresztül tehetjük meg:
container.classList.add("initial");
console.log(container.classList);

// Oldjuk meg, hogy amikor rákattintok a gombra, kerüljön le róla az "intial stílusosztály":
clickButton.addEventListener("click", () => {
  container.classList.remove("initial");
  console.log(container.classList);

  // Le tudom kérdezni, hogy rendelkezik-e bizonyos stílusosztállyal:
  console.log(container.classList.contains("initial")); // false, hiszen most szedtem le

  // Szeretném megoldani, hogy a gombbal ki tudjuk emelni a containert, illetve meg is tudjuk szüntetni a kijelölést, tehát
  // egyik kattintással rátesszük a "highlighted" (lásd HTML) stílusosztályt, kövivel levesszük, aztán újra rá, stb.
  // Az eddigi ismereteink alapján erre az eszköz az lenne, hogy megnézzük, hogy rajta van-e, ha nincs, rátesszük, különben levesszük:
  /*
  if (!container.classList.contains("highlighted")) {
    container.classList.add("highlighted");
  } else {
    container.classList.remove("highlighted");
  }
  */
  // Ez így tökéletes működik, ha kikommentezed, látni is fogod, azonban nem ez a legpraktikusabb mód erre.
  // Pontosan ezt a célt szolgálja a classList.toggle() hívás, aminek az első paramétere a class neve, a második opcionális:
  // ha csupán csak azt szeretném, hogy kattintásra levegye-rátegye a stílusosztályt, akkor:
  container.classList.toggle("highlighted");

  // Megadhatok egy második paramétert, ami egy "force" boolean érték: amikor igaz, akkor teszi rá, amikor hamis, akkor veszi le,
  // pl. mondhatnám, hogy amikor nincs rajta a "highlighted", tegye rá a "not-highlighted" stílusosztályt (lásd: HTML)
  container.classList.toggle(
    "not-highlighted",
    !container.classList.contains("highlighted"),
  );
});
