const h2 = document.querySelector("#title");
const input = document.querySelector("#titleInput");
const highlightCheckbox = document.querySelector("#highlight");
const lockButton = document.querySelector("#lockBtn");

// input event
// -- MEGJEGYZÉS: emlékezz vissza, hogyan viselkedett a szöveges input, amikor "change" eventet tettünk rá
input.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  h2.innerText = value === "" ? "Szöveg" : value;

  // természetese tökéletesen működne az alábbi megoldás is:
  //   if (value === "") {
  //     h2.innerText = "Milyen szép szöveg!";
  //   } else {
  //     h2.innerText = value;
  //   }
  // console.log(event.target.value); // input.value
});

// keydown event
// -- le tudom kérdezni, hogy melyik kulcs került lenyomásra, annak függvényében csinálhatok bármi
// -- MEGJEGYZÉS: emlékezz vissza, hogyan viselkedett a fenti text input, ha input event helyett keydownra tettük
input.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    h2.textContent = "Törlés történt";
  }
});

// change event
highlightCheckbox.addEventListener("change", (event) => {
  h2.classList.toggle("highlight", event.target.checked);
});

// click event
lockButton.addEventListener("click", (event) => {
  input.toggleAttribute("readonly");
  input.classList.toggle("locked");
  lockButton.textContent = input.hasAttribute("readonly") ? "Felold" : "Lezár";
});
