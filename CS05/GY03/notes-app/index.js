const title = document.querySelector("#title");
const titleInput = document.querySelector("#titleInput");
const checkBox = document.querySelector("#highlight");
const lockButton = document.querySelector("#lockBtn");

titleInput.addEventListener("input", () => {
  const inputValue = titleInput.value;
  title.textContent = inputValue.length === 0 ? "Feladataim" : inputValue;
});

// "change" event a checkboxon
checkBox.addEventListener("change", () => {
  title.classList.toggle("highlight", checkBox.checked); // toggle használata, ahhoz kötötten, hogy checkbox checked-e
});

lockButton.addEventListener("click", (e) => {
  if (titleInput.hasAttribute("readonly")) {
    titleInput.removeAttribute("readonly");
    e.target.innerText = "Lezárás";
  } else {
    titleInput.setAttribute("readonly", true);
    e.target.innerText = "Feloldás";
  }
});
