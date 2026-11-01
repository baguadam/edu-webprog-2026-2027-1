// Delegált eseménykezelés
function delegate(parent, child, when, what) {
  function eventHandlerFunction(event) {
    const eventTarget = event.target;
    const eventHandler = this;
    const closestChild = eventTarget.closest(child);

    if (eventHandler.contains(closestChild)) {
      what(event, closestChild);
    }
  }

  parent.addEventListener(when, eventHandlerFunction);
}

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

// ========= Solution =========
function renderEditor() {
  const h2 = divEditor.querySelector("h2");
  const selectedValue = contestants[selectedContestant];
  h2.textContent = selectedValue.name;

  const ul = divEditor.querySelector("ul");
  ul.innerHTML = "";
  selectedValue.penalties.forEach((p) => {
    const li = document.createElement("li");
    const durationInSec = p.duration / 1000;

    li.textContent = `${new Date(p.timestamp).toLocaleString()} + ${durationInSec}s`;

    const progress = document.createElement("progress");
    progress.max = durationInSec;
    progress.value = Math.max(0, p.timestamp + p.duration - Date.now()) / 1000;

    // const content = `
    //   <li>
    //     ${new Date(p.timestamp).toLocaleString()} + ${durationInSec}s
    //     <progress max=${durationInSec} value=${Math.max(0, p.timestamp + p.duration - Date.now()) / 1000}></progress>
    //   </li>
    // `;

    // ul.innerHTML += content;

    li.appendChild(progress);
    ul.appendChild(li);
  });
}

function renderContestants() {
  valuesArray = Object.values(contestants);
  ulContestants.innerHTML = "";
  valuesArray.forEach((c) => {
    const li = document.createElement("li");
    li.textContent = c.name;
    li.dataset.id = c.id;

    const span = document.createElement("span");

    // TASK B
    const sumPenalties =
      c.penalties.reduce(
        (sum, p) =>
          sum + Math.round(Math.max(0, p.timestamp + p.duration - Date.now())),
        0,
      ) / 1000;

    span.textContent = `${sumPenalties}s`;

    li.appendChild(span);
    ulContestants.appendChild(li);
  });
}

// TASK A
renderContestants();

// TASK C
ulContestants.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    const id = e.target.dataset.id;
    selectedContestant = id;
    divEditor.hidden = false;
    renderEditor();
  }
});

// TASK D
divEditor.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const duration = parseInt(e.target.dataset.duration);
    const person = contestants[selectedContestant];
    person.penalties.push({
      timestamp: Date.now(),
      duration: duration * 1000,
    });

    renderEditor();
    console.log(person);
  }
});

// TASK E
btnNew.addEventListener("click", () => {
  const name = inputNew.value;
  const keys = Object.keys(contestants);
  const id = keys.length + 1;
  contestants[id] = {
    id: id,
    name: name,
    penalties: [],
  };

  renderContestants();
});

// TASK F
setInterval(renderContestants, 1000);
setInterval(renderEditor, 1000);
