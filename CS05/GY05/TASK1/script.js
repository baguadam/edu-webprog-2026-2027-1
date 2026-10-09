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
const task7 = document.querySelector("#task7");

const tableProperties = {
  row: null,
  column: null,
  targetCount: null,
};
let selectedValues = [];

const getTableProperties = (value) => {
  if (value === "5") {
    tableProperties.row = 10;
    tableProperties.column = 9;
    tableProperties.targetCount = 5;
  } else if (value === "6") {
    tableProperties.row = 5;
    tableProperties.column = 9;
    tableProperties.targetCount = 6;
  } else {
    tableProperties.row = 5;
    tableProperties.column = 7;
    tableProperties.targetCount = 7;
  }
};

const generateTable = () => {
  for (let i = 0; i < tableProperties.row; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < tableProperties.column; j++) {
      const td = document.createElement("td");
      td.textContent = i * tableProperties.column + (j + 1);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
};

newButton.addEventListener("click", () => {
  // setAttribute
  newButton.setAttribute("disabled", true);
  select.setAttribute("disabled", true);

  getTableProperties(select.value);
  generateTable();
});

table.addEventListener("click", (event) => {
  if (event.target.matches("td")) {
    event.target.classList.toggle("played");

    const parsedValue = parseInt(event.target.textContent);
    if (event.target.classList.contains("played")) {
      selectedValues.push(parsedValue);
    } else {
      selectedValues = selectedValues.filter((value) => value !== parsedValue);
    }

    tasks.style.display =
      selectedValues.length === tableProperties.targetCount ? "block" : "none";
  }
});

drawButton.addEventListener("click", () => {
  const numbers = drawLottery(tableProperties.targetCount);
  task6.textContent = numbers.join("; ");

  const count = numbers.filter((num) => selectedValues.includes(num)).length;
  task7.textContent = count;
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
