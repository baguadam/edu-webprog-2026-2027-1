const tbody = document.querySelector("tbody");

tbody.addEventListener("click", (e) => {
  const target = e.target;
  if (target.matches("button")) {
    const tr = target.closest("tr");
    tr.remove();
  }

  if (target.matches("td.car")) {
    target.classList.toggle("highlight");
  }
});
