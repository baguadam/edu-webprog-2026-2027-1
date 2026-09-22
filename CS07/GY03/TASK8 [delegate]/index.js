// Delegálás részletes leírása itt:
// https://github.com/baguadam/edu-materials/tree/main/webprog/js-dom-events-delegates#-delegation

const table = document.querySelector("table");
const tds = document.querySelectorAll("td");

// Csinálhatnánk ezt is, de nem tesszük, mert nagyon nem hatékony minden egyes cellára rátenni egy esménykezelőt
// tds.forEach((td) => {
//   td.addEventListener("click", () => {
//     console.log(td.textContent);
//   });
// });

// Helyette a külső, közös "ős" elemre tesszük az eseménykezelőt, ekkor a buborékolás miatt bárhol váltódik ki benne az esemény,
// vissza fog jutni ehhez az őshöz. Innentől kezdve csak a feladatunk, hogy megvizsgáljuk, mi volt a "target",
// vagyis azt, hogy mi váltotta ki. Ezzel tudjuk kontrollálni, hogy pl. csak td-kre történjen valami: e.target.matches()
table.addEventListener("click", (event) => {
  if (event.target.matches("td")) {
    console.log(event.target.textContent);
  } else {
    console.log("NEM TD");
  }
});
