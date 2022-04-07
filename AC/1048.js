var readline = require("readline");

var lines = [];
var rl = readline.createInterface({
  input: process.stdin,
});

rl.on("line", function (line) {
  lines.push(line);
});

rl.on("close", function () {
  solve(lines);
});
function solve(lines) {
  let a = [];
  for (let i = 1; i <= Number(lines[0]); i++) {
    a.push(Number(lines[i]));
  }
  console.log(getMax(a));
}

function getMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (sum(arr.slice(i, j + 1)) > max) {
        max = sum(arr.slice(i, j + 1));
      }
    }
  }
  return max;
}
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
