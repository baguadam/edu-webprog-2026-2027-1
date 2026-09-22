const clickButton = document.querySelector("#click-button");
const container = document.querySelector(".container");

clickButton.addEventListener("click", () => {
  // HTML-ben bármilyen "extra" adatot el tudunk tárolni a data-* attribútumok segítségével.
  // Ezeket a DOM-ban a dataset property-n keresztül érhetjük el, ami egy objektum,
  // ahol a kulcsok a data- utáni részek camelCase formában.
  // === MEGJEGYZÉS:
  // Ez azt jelenti, ha mondjuk csinálok egy olyat, hogy
  // <div data-alma-korte-kiskutya="nyolcvan"></div>
  // Akkor itt a datasetbe bekerül egy almaKorteKiskutya key, amihez a value "nyolcvan lesz"

  // Érjük el, hogy kattintásra kiolvassunk a container div data-color, data-bg-color értékeit, és ezeket beállítjuk megfelelően
  console.log(container.dataset);
  container.style.color = container.dataset.color;
  container.style.backgroundColor = container.dataset.bgColor;

  // === MEGJEGYZÉS:
  // Természetes a getAttribute() segíségével el is el tudnánk érni ezeket az értékeket: container.getAttribute("data-color"),
  // de ez itt most elég overkill lenne 
});
