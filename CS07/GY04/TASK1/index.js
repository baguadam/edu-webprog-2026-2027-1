// querySelector
const h2 = document.querySelector("#title");
const input = document.querySelector("#titleInput");
const checkbox = document.querySelector("#highlight");
const button = document.querySelector("#lockBtn");

// input event
// -- MEGJEGYZÉS: emlékezz vissza, hogyan viselkedett a szöveges input, amikor "change" eventet tettünk rá
input.addEventListener("input", (event) => {
  const target = event.target;

  // állítsuk be a h2 tartalmának az input tartalmát
  // ha "üres" az input, akkor legyen default szöveg
  const value = target.value;
  h2.textContent = value.trim() === "" ? "Szöveg" : value;

  // természetese tökéletesen működne az alábbi megoldás is:
  //   if (value.trim() === "") {
  //     h2.textContent = "Szöveg";
  //   } else {
  //     h2.textContent = value;
  //   }
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
checkbox.addEventListener("change", (event) => {
  // toggle-özni akarok egy classListet
  h2.classList.toggle("highlight", event.target.checked);
});

// click event
button.addEventListener("click", (event) => {
  input.toggleAttribute("readonly");
  event.target.innerText = input.hasAttribute("readonly") ? "Felold" : "Lezár";
});
