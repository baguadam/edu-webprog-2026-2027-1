const a = document.querySelector("a");

a.addEventListener("click", (event) => {
  // Bizonyos esetekben az eseményeknek van egy "default" viselkedése. Ilyen például az, ha egy linkre kattintunk:
  // ekkor a kattintás következtében a link átnavigál minket az adott oldalra. Ilyen például, amikor egy formot elküldünk
  // a "submit" gombra kattintva: ekkor az oldal újratölt. Sokszor szeretnénk ezeket az alapértelmezett viselkedéseket
  // meggátolni. Erre szolgál a preventDefault(), amit az eseményobjektumon tudunk meghívni. Ennek hatására blokkoljuk
  // az alapértelmezett viselkedést, így például ha egy linkre teszünk egy "click" eventet, meggátoljuk azt, hogy kattintáskor
  // átnavigáljunk az adott oldalra.
  event.preventDefault();

  // A hasAttribute(), getAttribute(), setAttribute(), removeAttribute() függvényeket tudjuk használni, hogy
  // egy adott elem HTML attribútumjaival interaktáljunk. Például nézzük, hogy a HTML-ben létrehozott link esetén ezt mit jelent:

  console.log(a.hasAttribute("disabled")); // van-e disabled attribútuma (nincs, false lesz)
  console.log(a.getAttribute("href")); // mi a "href" attribútum értéke
  a.setAttribute("href", "http://inf.elte.hu"); // ha nincs "href" attribútuma, hozzáadja az adott értékkel, ha van, felülírja
  console.log(a.getAttribute("href")); // ez már a megváltoztatott href lesz: http:inf.elte.hu
  a.setAttribute("disabled", true); // hozzáadja a "disabled" attribútumot true értékkel

  a.removeAttribute("title"); // törli a "title" attribútumot
  console.log(a.getAttribute("title") ?? "alma"); // mivel nincs "title" attribútumja, így nullt ad vissza, ezért "fallback" az almára
});
