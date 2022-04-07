const { time } = require("console");
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
  let target = lines[0];
  let n = Number(lines[1]);
  let arr = [];
  arr.splice(0, 2);
  for (let i = 0; i < n; i++) {
    if (lines[i + 2] !== target) {
      arr.push(lines[i + 2]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
