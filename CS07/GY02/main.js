// DOM alapok -- lásd: edu-material repo (link Teamsen)

// elemek elérése a DOM-ból:
// querySelector -- visszaadja az első olyan elemet, ami megfelel a selectornak. Akkor is csak egyet ad vissza,
// ha több ilyen elem is van. Ha nincs megfelelő elem, akkor null-t ad vissza.
const clickButton = document.querySelector(".click-button");
console.log(clickButton);
// a style-on keresztül módosíthatjuk a stílust, ugyanúgy, mintha CSS-t írnánk
clickButton.style.backgroundColor = "red"; // megváltoztatjuk a háttérszínét
clickButton.style.color = "green"; // megváltoztatjuk a betűk színét

// innerHTML vs textContent vs innerText
// lásd: https://github.com/baguadam/edu-materials/tree/main/webprog/js-dom-events-delegates#sz%C3%B6veg-m%C3%B3dos%C3%ADt%C3%A1sa
console.log(clickButton.innerHTML);
console.log(clickButton.textContent);

// querySelectorAll -- visszaadja NodeListben az összes olyan elemet, amit elér a selectorral. Itt például 3 ilyen gombunk van
// fontos, hogy NodeList, amit visszaad, és nem Array, mivel korábban beszélt tömb metódusok jelentős része alapból nincs
// implementálva NodeListen. Ha mondjuk szeretnénk mapet vagy filtert alkalmazni, akkor tömbbé kell konvertálni előbb
const buttons = document.querySelectorAll(".click-button");
// const buttonArray = Array.from(buttons);
const buttonArray = [...buttons]; // ez így már tömb, lehetne mapelni, filterezni, stb
console.log(buttonArray);
