// Selected elements
const ulContestants = document.querySelector("ul#contestants");
const divEditor = document.querySelector("#contestant-editor");
const btnNew = document.querySelector("#btnNew");
const inputNew = document.querySelector("#inputNew");

// Data
let contestants = {
  1: {
    id: "1",
    name: "Contestant 1",
    penalties: [
      { timestamp: Date.now(), duration: 60000 },
      { timestamp: Date.now() - 2000, duration: 10000 },
      { timestamp: Date.now() - 10000, duration: 30000 },
    ],
  },
  2: {
    id: "2",
    name: "Contestant 2",
    penalties: [
      { timestamp: Date.now(), duration: 10000 },
      { timestamp: Date.now() - 5000, duration: 10000 },
      { timestamp: Date.now() - 30000, duration: 30000 },
    ],
  },
};
let selectedContestant = null;

// Renders
function getPenaltyFor(contestant) {
  return contestant.penalties.reduce(
    (sum, p) =>
      sum +
      Math.floor(Math.max(0, p.timestamp + p.duration - Date.now()) / 1000),
    0,
  );
}
function renderContestants() {
  ulContestants.innerHTML = Object.values(contestants)
    .map(
      (c) => `
    <li 
      data-id="${c.id}" 
      class="${getPenaltyFor(c) > 0 ? "penalty" : ""}"
    >
      ${c.name} <span>${getPenaltyFor(c)}s</span>
    </li>
  `,
    )
    .join("");
}
function renderEditor() {
  if (selectedContestant) {
    const contestant = contestants[selectedContestant];
    const h2 = divEditor.querySelector("h2");
    const ul = divEditor.querySelector("ul");
    h2.innerHTML = contestant.name;
    ul.innerHTML = contestant.penalties
      .map(
        (p) => `
      <li>
        ${new Date(p.timestamp).toLocaleString()} + ${p.duration / 1000}s 
        <progress max="${p.duration / 1000}" value="${Math.max(0, (p.timestamp + p.duration - Date.now()) / 1000)}"></progress>
        (${Math.floor(Math.max(0, p.timestamp + p.duration - Date.now()) / 1000)}s)
      </li>
    `,
      )
      .join("");
  }
}

// Event handlers
ulContestants.addEventListener("click", function (e) {
  if (e.target.matches("li")) {
    const id = e.target.dataset.id;
    selectedContestant = id;
    divEditor.hidden = false;
    renderEditor();
  }
});
divEditor.addEventListener("click", function (e) {
  if (e.target.matches("button[data-duration]")) {
    const duration = parseInt(e.target.dataset.duration);
    const contestant = contestants[selectedContestant];
    contestant.penalties.push({
      timestamp: Date.now(),
      duration: duration * 1000,
    });
    window.localStorage.setItem("contestants", JSON.stringify(contestants));
  }
});
btnNew.addEventListener("click", function (e) {
  const newName = inputNew.value;
  const newId = "" + Date.now();
  contestants[newId] = {
    id: newId,
    name: newName,
    penalties: [],
  };
  window.localStorage.setItem("contestants", JSON.stringify(contestants));
  renderContestants();
});

// Start
contestants = JSON.parse(window.localStorage.getItem("contestants")) || {};
renderContestants();
renderEditor();
setInterval(renderContestants, 1000);
setInterval(renderEditor, 1000);
