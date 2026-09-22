const inputField = document.querySelector("#input-control");
const textContainer = document.querySelector("#input-text");

// Amikor input fieldekkel dolgozunk, akkor ezeknek az aktuális tartalmát le tudjuk kérdezni a "value"
// property-n keresztül:
console.log(inputField.value); // "Ide írj..." lesz a log, hiszen kezdetben ez a value, lásd HTML

// Ha azt szeretném, hogy váltódjon ki egy esemény minden egyes alkalommal, amikor beleírok az input fieldbe,
// akkor az "input" eventet tudom használni.

const handleInput = (e) => {
  // Szeretnénk beállítani a textContainer szövegének azt, ami éppen az aktuális tartalma az inputnak.
  // Ekkor két opciónk van:
  // 1. Nem vagyunk túl generikusak, és azt mondjuk, hogy ezt a handlert csak erre az egy input fieldre akarjuk használni,
  // vagyis egyszerűen csak lekérdezzük az inputField.value-t minden egyes alkalommal, amikor kiváltódik az input event:
  // textContainer.textContent = inputField.value;

  // 2. Eléggé generikusak vagyunk, és azt mondjuk, hogy szeretnénk, ha ez a handler általánosságban működni, és mindig
  // arra az input fieldre, amihez hozzákapcsoltuk. Ekkor nem égetjük be az inputFieldet, hanem az eseményobjektumon keresztül
  // jutunk el hozzá. Ezzel már találkoztunk: e.target
  textContainer.textContent = e.target.value; // ebben az esetben e.target = inputField

  // Ez utóbbi jobb megoldás, hiszen ha lenne két input fieldem, ugyanezt a handlert használhatnám mindkettőnél, az e.target
  // pedig éppen mindig az aktuális elem lenne, amibe írok
};

inputField.addEventListener("input", handleInput);

// === MEGJEGYZÉS: hasonló, de kicsit máshogy működik a keydown: ez nem akkor hívódik meg, amikor az input value-ja ténylegesen
// változott, hanem amikor lenyomtuk a gombot. Emiatt mindig egy karakter késésben lesz, ha a fenti példában lecseréljük az
// input eventet erre. Viszont "keydown" esetén le tudjuk kérdezni az eseményobjektumon keresztül, hogy éppen milyen
// gombot nyomtunk le. Így ez a kommentezett példa csak akkor adja hozzá az elemet, ha Enter volt a lenyomott gomb
// inputField.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     textContainer.textContent = e.target.value;
//   }
// });

// === MEGJEGYZÉS: további példák az előadás diákon, következő órákon
