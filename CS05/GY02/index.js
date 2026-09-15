const temperatures = [-1.5, 20, 30, -12.5, 1];

// () => {} -- "lambda", tehát név nélküli arrow function

// CAT I. -- callback, megkapja az aktuális elemet, és feldolgozza, péládul kilogolja, meghív vele egy függvényt, ilyesmi
// nincs visszatérési értéke
// forEach
temperatures.forEach((elem) => {
  if (elem > 0) {
    console.log(elem);
  }
});

// CAT II. -- "transformer" callback, megkapja az aktuális elemet, és visszatér egy valamilyen értékkel
// map -- ebben az esetben ez az értéket "mapeli" minden tömbelemhez az új tömbben
const mappedArray = temperatures.map((elem) => elem + "C");

// reduce -- két paramétert kap a callback: egy akkumulátort (a végén ennek az értéket adja vissza) és az aktuális elemet,
// minden iterációban az akkumulátort módosítja. A reduce második paramétere az akkumulátor kezdeti értéke
console.log(temperatures.reduce((acc, curr) => acc + curr, 0));
console.log(temperatures.reduce((acc, curr) => acc * curr, 1));
console.log(
  temperatures.reduce(
    (acc, curr) => (curr > acc ? curr : acc),
    temperatures[0],
  ),
);

// CAT III. -- ezeknek a callbackeknek a visszatérési értéke logikai érték, tehát mondhatjuk, hogy predikátum, valamit mond
// az aktuális elemről. Ennek a teljesülésétől függően tartjuk meg/vesszük figyelembe
// filter
console.log(temperatures.filter((elem) => elem > 0));

// MEGJEGYZÉS: lehetne ez is:
/*
temperatures.filter((elem) => {
  return elem > 0;
})
*/

// every
console.log(temperatures.every((elem) => elem > 0));

// some
console.log(temperatures.some((elem) => elem < 0));

// find
console.log(temperatures.find((elem) => elem > 0));

// ***************************************
// GYAKORLÁS
// ***************************************

const items = [
  { id: "A", qty: 10, price: 2.5, active: true },
  { id: "B", qty: 5, price: 3.0, active: false },
  { id: "C", qty: 8, price: 4.0, active: true },
  { id: "D", qty: 3, price: 10.0, active: true },
  { id: "E", qty: 12, price: 1.25, active: false },
];

// adjuk meg az aktív elemeket számát
console.log(items.filter((x) => x.active).length);

// hozzunk létre egy új tömböt, ami minden objektumhoz egy új objektumot rendel ebben a formában:
// {
//   name: "A";  // eredeti objektum id-ja
//   value: 50;  // eredeti objektum qty * price
// }

console.log(
  items.map((elem) => ({
    name: elem.id,
    value: elem.price * elem.qty,
  })),
);

// megbeszéltük, hogy azért kell a (), mert anélkül úgy értelmezné, mint a függvény törzsét szeretném megírni, nem pedig
// mintha egy objektumot adnék vissza, tehát ez:
/*
items.map((elem) => {
    name: elem.id,
    value: elem.price * elem.qty,
})
*/
// nem működne... Ha maradunk a () => {} - nál, akkor így viszont rendben lenne:
/*
items.map((elem) => {
  return {
    name: elem.id,
    value: elem.price * elem.qty,
  }
})
*/

// van-e olyan termék, ahol a value (azaz qty * price) > 30
console.log(items.some((x) => x.qty * x.price > 30));

// igaz-e, hogy mindegyik terméknél value (tehát qty * price) > 30
// every
console.log(items.every((x) => x.qty * x.price > 30));

// keressük meg az első nem aktív elemet
console.log(items.find((x) => !x.active));

// aktív elemek árának az összege -- nyugodtan láncolhatjuk a tömbfüggvényeket
console.log(items.filter((x) => x.active).reduce((acc, curr) => acc + curr, 0));
