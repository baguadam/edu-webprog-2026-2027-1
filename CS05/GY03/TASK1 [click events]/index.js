// querySelector, ezzel már megismerkedtünk előző alkalommal: szelektorokon keresztül érjük el az elemeket a DOM-ból
const clickButton = document.querySelector("#click-button");
const containerDiv = document.querySelector(".container");

// Ha ezt az eseménykezelőt használjuk, akkor a containerDiv teljes belső HTML-jét "felülütjük" azzal, amit itt megadunk.
// Ekkor tehát nem számít, hogy például ez a div tartalmaz-e eredetileg bármilyen más taget, amint megtörténik a kattintás,
// a teljes tartalma le lesz cserélve arra, amit itt beállítunk.
const handleOtherClick = () => {
  containerDiv.innerHTML = `
        <p>
            <b style="color: green">Hatalmas szöveg</b>
        </p>
    `;
};

// Ha ezt az eseménykezelőt használjuk, akkor itt a createElement() hívással először létrehozzuk magát az elementet, ilyenkor
// ez a "kezünkben lesz", hasonlóan, mintha querySelectorral bevettük volna: tudjuk módosítani a stílusát, stb.
// Azonban önmagában létrehozni az elemet kevés - be is kell fűzni a DOM-ba. Ehhez szükség van a szülő elemre, ami alá "append"-elni
// tudjuk.
// ==== MEGJEGYZÉS:
// Nemcsak append() hívás lehetséges, például van prepend(), ez értelemszerűen nem a gyerekek végére, hanem az elejére fűzi.
// Ezen felül például létezik insertBefore() is, amivel adott gyerek elé tudjuk befűzni, jó, ha hallotok ezekről
const handleClick = () => {
  const p = document.createElement("p");
  const b = document.createElement("b");
  b.textContent = "Szöveg";
  b.style.color = "green";
  p.appendChild(b);
  containerDiv.appendChild(p);
};

clickButton.addEventListener("click", handleOtherClick);
