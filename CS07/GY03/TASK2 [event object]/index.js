const textP = document.querySelector("#paragraph"); //  bekérjük a paragrafust ID alapján

// Taszunk rá egy double click eventet. A másik fontosabb észrevétel, hogy az eseménykezelő callbackben most elkérjük magát az
// eseményobjektumot is. Ez információt hordoz arról, hogy valójában mi is történt, milyen típusú esemény váltódott ki,
// hol, minek a hatására, stb. Gondolhattok erre úgy, mintha a böngésző egy "reportot" adna a kezünkbe.
// Lekérdezhetünk olyan hasznos dolgokat, mint:
// event.target     -- melyik elemen váltódott ki az esemény
// event.type       -- mi az esemény típuse, pl "click", "keydown", "dblclick", stb.
// event.clientX    -- az egér X pozíciója
textP.addEventListener("dblclick", (event) => {
  const target = event.target; // az elem, amin kiváltódott az esemény, adott esetben ez === textP
  target.style.backgroundColor = "red"; // itt most ugyanas, mintha azt írnám: textP.style.backgroundColor = "red"
  console.log(target);
});

// =============================================================
// Mi van akkor, ha szükségem van az eseményobjektumra, a handler pedig nem egyszerű arrow functionként definiálom?
// Pl.
const handlePClick = (e) => {
  console.log(e.target);
};

// Ilyenkor ugyanúgy adom át a callbacket, mintha paraméter nélküli lenne: az eseményobjektumot automatikusan megkapja, nem
// szükséges ezt explicit átpasszolnom neki.
// === FONTOS:
// ez csak akkor igaz, ha nincsenek további paraméterei a handlernek
textP.addEventListener("click", handlePClick);

// =============================================================
// Mi van akkor, ha a handler megkapja az eseményobjektumot, és egy második paramétert, ami például egy név?
// Magát a handlert megírni semmi extra:
const handlePWithNameClick = (e, name) => {
  console.log(`HALÓHALÓ, itt vagyok az ${e.target} elemben, a nevem: ${name}`);
};

// A nagyobb kérdés, hogy ilyenkor hogyan adjuk át az addEventListenernek?
// 1. megbeszéltük, hogy ha csak átadjuk, mint addEventListener("click", handlePWithNameClick), akkor az eseményobjektumot megkapja,
// de ez csak az egy (vagy 0) paraméteres handlerre vonatkozik, itt 2 paraméter van

// 2. nem jó, ha azt csinálom, hogy addEventListener("click", handlePWithNameClick(event, "Jenő")), hiszen ilyenkor helyben
// meg is hívom, nem pedig mint meghívható függvényt adok tovább

// Akkor hogyan?
// A megoldás, hogy ilyenkor körbevesszük a függvényt egy névnélküli "lambdával", vagyis egy arrow functionnel:
textP.addEventListener("click", (e) => handlePWithNameClick(e, "Jenő"));
// Ha ezt csinálom, akkor nem hívom meg helyben, hanem egy olyan arrow functiont adok át az eventListenernek, amit ha meghív,
// az meghívja a megfelelő paraméterekkel a handlePWithNameClick functiont.
// === FONTOS:
// ilyenkor a külső arrow function - mint láttuk korábban - elkéri az eseményobjektumot, és továbbpaszolja, nem elég annyi, hogy:
// addEventListener("click", () => handlePWithNameClick(e, "Jenő"));
