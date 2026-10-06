// IDE ÍRD A KÓDÓD:
// TODO - 1
// - kérd be az "Új szelvény" felíratú gombot és a legördülő listát
// - a gombra kattintáskor állítsd be mindkettőnek a disabled attribútumot (tehát tiltsd le)
const newButton = document.querySelector("#new");
const select = document.querySelector("#game");
const table = document.querySelector("table");
const tasks = document.querySelector("#tasks");
const drawButton = document.querySelector("#draw");

const task6 = document.querySelector("#task6");

const tableProperties = {
  row: null,
  column: null,
  targetValue: null,
};
let selectedValues = [];

const setTableProperties = (value) => {
  if (value === "5") {
    tableProperties.row = 10;
    tableProperties.column = 9;
    tableProperties.targetValue = 5;
  } else if (value === "6") {
    tableProperties.row = 5;
    tableProperties.column = 9;
    tableProperties.targetValue = 6;
  } else {
    tableProperties.row = 5;
    tableProperties.column = 7;
    tableProperties.targetValue = 7;
  }
};

const generateTable = () => {
  for (let i = 0; i < tableProperties.row; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < tableProperties.column; j++) {
      const td = document.createElement("td");
      td.textContent = i * tableProperties.column + j + 1;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
};

newButton.addEventListener("click", () => {
  select.setAttribute("disabled", true);
  newButton.setAttribute("disabled", true);

  setTableProperties(select.value);
  generateTable();
});

table.addEventListener("click", (event) => {
  if (event.target.matches("td")) {
    // event.target => td
    event.target.classList.toggle("played");

    const tdNumber = parseInt(event.target.textContent);
    if (event.target.classList.contains("played")) {
      selectedValues.push(tdNumber);
    } else {
      selectedValues = selectedValues.filter((value) => value !== tdNumber);
    }

    tasks.style.display =
      selectedValues.length === tableProperties.targetValue ? "block" : "none";
  }
});

drawButton.addEventListener("click", () => {
  const lottery = drawLottery(tableProperties.targetValue);
  task6.textContent = lottery.join(", ");
});

// ===================================================

function drawLottery(n) {
  const limits = { 5: 90, 6: 45, 7: 35 };
  if (!limits.hasOwnProperty(n)) return [];
  const limit = limits[n];
  let draw = [];
  while (draw.length < n) {
    let rand = Math.floor(Math.random() * limit) + 1;
    if (!draw.includes(rand)) draw.push(rand);
  }
  return draw.sort((u, v) => u - v);
}
