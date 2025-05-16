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

for (let i = 0; i < 30; i++) {
  grid[i] = document.createElement("button");
  grid[i].className = "bunny-button";
  grid[i].textContent = "I love you";
  document.body.appendChild(grid[i]);
}
