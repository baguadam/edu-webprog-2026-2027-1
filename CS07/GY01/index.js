// ******************************************
// VÁLTOZÓK ÉS TÍPUSOK
// ******************************************
// const vagy let, var-t NE használjatok
// Ezek így az elemi típusokra példa, tehát szám, szöveg és logikai típusok
let myVar = 6;
myVar = "almafa";
myVar = true;

// PÉLDA arra, hogy mi a gond a var scope-jával: minden probléma nélkül elérhető a num3 az if scope-ján kívül is
// if (true) {
//   let num1 = 5;
//   const num2 = 6;
//   var num3 = 7;
// }
// console.log(num3);

// Megnéztük, hogyan tudunk műveleteket végezni ezekkel a típusokkal, illetve hogyan konvertálódnak, például:
// szám + szám = szám
// szám + szöveg = szöveg   -- konkatenálja
// szöveg + szöveg = szöveg -- konkatenálja

// szám - szám = szám
// szám - szöveg = NaN / szám, attól függően, hogy a szöveget tudja-e számmá kasztolni
// szöveg - szám = NaN / szám, attól függően, hogy a szöveget tudja-e számmá kasztolni

// szorzásra és osztásra ugyanaz a szabály vonatkozik, mint kivonásra

// ******************************************
// FÜGGVÉNYEK
// ******************************************
// tradicionális -- egyelőre az a fontos, hogy "globálisan" elérhető, nem csak azután hívható, hogy definiáltuk
add(5, 6);

function add(num1, num2) {
  num1 = 12;
  console.log(num1 + num2);
}

// arrow functions -- gyakorlatilag mintha egy "lambdát" tárolnánk el egy változóban.
// Az alap szintaxis: () => {}
// FONTOS eltérés a fentivel, hogy csak azután hívható, hogy definiáltuk - logikus, hiszen a változó csak onnan létezik
const addArrow = (num1, num2) => {
  console.log(num1 + num2);
};

addArrow("alma", "fa");
// ha összetettebb függvénytörzs nélkül szeretnék egy olyan arrow functiont, ami kap valamilyen paramétert, és csak visszatér
// egy értékkel, akkor elhagyható a {} és azon belül a return, a szintaxis () => ... - ra egyszerűsődik:
const addTwoNums = (num1, num2) => num1 + num2;

// ez ugyanaz, mintha azt mondanám:
const addTwoNumsReturn = (num1, num2) => {
  return num1 + num2;
};

// ******************************************
// TÖMBÖK
// ******************************************
const myArray = [1, 2, 3, 4, "alma", true];
// push -- hozzáfűz egy elemet a tömb végéhez:
myArray.push("kocckocc");
// pop -- kiszedi a tömb utolsó elemét:
const last = myArray.pop(); // => "kocckocc"
// shift -- kiszedi a tömb legelső elemét:
const first = myArray.shift(); // => 1
// slice -- szétvágja a tömböt, alulról zárt felülről nyitott
// ezen a ponton myArray = [2, 3, 4, "alma", true];
const slicedArray = myArray.slice(0, 3); // [2, 3, 4], mert a nulladik elemtől (benne van) a harmadik elemig (már nincs benne)

// nyilván végigiterálhatnánk a tömbön "tradicionálisan is", egyszerűen beleindexelve
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// for ... of --> végigmegy az elemeken
for (const elem of myArray) {
  console.log(elem);
}

// for ... in --> végigmegy az indexeken
for (const ind in myArray) {
  console.log("Index: ", ind);
}

// mátrixok -- tömbök tömbje
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(matrix[1][2]); // "sor", majd "oszlop" szerint indexelve

for (const row of matrix) {
  console.log(row);
}

// ******************************************
// OBJEKTUMOK
// ******************************************
const person = {
  name: "Matyi",
  age: 24,
  isHere: false,

  greet: () => {
    console.log("Szia!");
  },
};

console.log(person); // kilogolhatom az egész objectet

// vagy lekérdezhetek csak bizony key-eket:
console.log(person.name); // => Matyi
