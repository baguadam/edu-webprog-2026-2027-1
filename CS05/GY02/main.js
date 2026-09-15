// DOM alapok -- lásd: edu-material repo (link Teamsen)

// elemek elérése a DOM-ból:
// querySelector -- visszaadja az első olyan elemet, ami megfelel a selectornak. Akkor is csak egyet ad vissza,
// ha több ilyen elem is van. Ha nincs megfelelő elem, akkor null-t ad vissza.
const clickButton = document.querySelector(".click-button");

// események kezelése "figyelőkkel" történik. Az addEventListener() hívással tudunk eseményfigyelőt rakni egy objektumora,
// ekkor két dolgot kell megadnunk: milyen eseményt figyelünk, illetve a callback function, ami gyakorlatilag a handler, ezekre
// kövi órán látunk több példát!
clickButton.addEventListener("click", () => {
  console.log("KATT");
});

// querySelectorAll -- visszaadja NodeListben az összes olyan elemet, amit elér a selectorral. Itt például 3 ilyen gombunk van
// fontos, hogy NodeList, amit visszaad, és nem Array, mivel korábban beszélt tömb metódusok jelentős része alapból nincs
// implementálva NodeListen. Ha mondjuk szeretnénk mapet vagy filtert alkalmazni, akkor tömbbé kell konvertálni előbb
const buttons = document.querySelectorAll(".click-button"); // NodeListet ad vissza
const buttonsArray = [...buttons]; // Array.from(buttons)
buttonsArray.forEach((button) => {
  button.addEventListener("click", () => {
    // innerHTML vs textContent vs innerText
    // lásd: https://github.com/baguadam/edu-materials/tree/main/webprog/js-dom-events-delegates#sz%C3%B6veg-m%C3%B3dos%C3%ADt%C3%A1sa
    console.log(button.textContent);
    button.innerHTML = `
        <div style="background-color: red">
            KÖRTE
        </div>
    `;
  });
});

console.log(buttonsArray);
