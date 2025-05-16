//import { DateTime } from "luxon";
import "./style.css";

//something.className = "bunny-button";
//something.textContent = "Bunny is cute";
let grid = [];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

for (let i = 0; i < 28; i++) {
  grid[i] = document.createElement("button");
  grid[i].className = "bunny-button";

  document.body.appendChild(grid[i]);
}

for (let k = 0; k < 4; k++) {
  for (let j = 0; j < 7; j++) {
    grid[7 * k + j].textContent = days[j];
  }
}

function task() {
  grid[0].addEventListener("click", () => {
    const userInput = prompt("Enter your task");
    grid[0].textContent = grid[0].textContent + " " + userInput;
  });
}

task();
