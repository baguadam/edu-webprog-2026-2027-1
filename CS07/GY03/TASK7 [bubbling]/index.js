// Arról, hogy mi a buborékolás (bubbling) részletesen olvashatsz a segédanyagokban:
// https://github.com/baguadam/edu-materials/tree/main/webprog/js-dom-events-delegates#-event-bubbling
const div1 = document.querySelector("#div1");

// Ez a példa elég jól szemlélteti, hogy mi is az a bubbling, és hogyan működik: figyeld meg, hogy bár az eseménykezelő
// a legkülső div-en van (lásd HTML), ha azon belül kattintok bármire, mindig az az elem fog logolódni, amin a kattintás történt.
// Tehát bár az eseményt például a legbelső gomb váltotta ki, amikor rákattintottam, emiatt ő lesz a target, viszont ez
// feljutott egészen a szülőig (és tovább a dokumentumig), hiszen amikor a gombra kattintottam, valóban azokra is kattintottam,
// amikben a gomb benne van.
div1.addEventListener("click", (e) => {
  console.log(e.target);
});
