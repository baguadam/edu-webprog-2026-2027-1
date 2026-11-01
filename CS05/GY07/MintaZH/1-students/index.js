const task1 = document.querySelector("#task1");
const task2 = document.querySelector("#task2");
const task3 = document.querySelector("#task3");
const task4 = document.querySelector("#task4");

const students = [
  { code: "xpzyom", name: "Buck Oen", grades: [4, 4, 2, 4, 4, 4, 4, 3] },
  { code: "ollsxk", name: "Rakel Hall", grades: [2, 2, 2, 3, 3, 2] },
  { code: "fcedpx", name: "Adrianna Yosevitz", grades: [1, 3, 3, 3, 4, 1] },
  {
    code: "hughay",
    name: "Kassi Blaxton",
    grades: [3, 4, 5, 4, 5, 4, 2, 4, 5],
  },
  { code: "tymclq", name: "Merrili Hutchison", grades: [5, 3, 2, 3, 2, 4] },
  { code: "xrpwmb", name: "Vittorio Eckhard", grades: [5, 5, 5, 5, 5] },
  { code: "tmkhgm", name: "Jacobo Fidock", grades: [1, 1, 4, 1, 1, 1, 2, 2] },
  { code: "ltfwyu", name: "Philip Roeby", grades: [5, 5, 5, 5, 5, 5, 5, 5, 5] },
  {
    code: "gpbqmb",
    name: "Kakalina Geraldini",
    grades: [5, 4, 3, 4, 5, 3, 5, 3, 3, 3],
  },
  { code: "vimrfd", name: "Sancho Hasty", grades: [1, 2, 1, 1, 1, 3] },
];

// ========= Solution =========
// Hogy hívják azt a diákot, akinek a kódja xrpwmb?
// What's the name of the student whose code is "xrpwmb"?
// find
task1.textContent = students.find((student) => student.code === "xrpwmb").name;

// Kik azok a diákok, akiknek csupa 5-ösük van?
// Who are the students that received no grade other than 5?
task2.textContent = students
  .filter((student) => student.grades.every((grade) => grade === 5))
  .map((student) => student.name)
  .join(", ");

// Hány olyan diák van, aki megbukott (legalább 3 darab 1-ese van)?
// How many students have failed (received at least three 1s)?
task3.textContent = students.filter(
  (student) => student.grades.filter((grade) => grade === 1).length >= 3,
).length;

// Ki kapta a legtöbb egyest?
// Who received the highest number of 1s?
// console.log(
//   students.reduce(
//     (acc, curr) => (curr.grades.length > acc ? curr.grades.length : acc),
//     -Infinity,
//   ),
// );

/*
acc = {
  name: "Name",
  count: 10
}

*/
console.log(
  students.reduce(
    (acc, curr) =>
      curr.grades.filter((grade) => grade === 1).length > acc.count
        ? {
            name: curr.name,
            count: curr.grades.filter((grade) => grade === 1).length,
          }
        : acc,
    { name: "", count: -Infinity },
  ),
);
