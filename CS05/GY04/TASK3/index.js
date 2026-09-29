const tbody = document.querySelector("tbody");

tbody.addEventListener("click", (event) => {
  if (event.target.matches("button")) {
    const row = event.target.closest("tr"); // a hierarchiában legközelebb lévő "tr" elemet adja viszsza
    row.remove();
  }

  // delegálásnak tudok egészen specifikus lenni: az a td, aminek car stílusosztálya van
  if (event.target.matches("td.car")) {
    event.target.classList.toggle("highlight");
  }
});
