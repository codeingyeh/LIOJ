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
  let a = +lines[0];
  let b = +lines[1];
  let max = a > b ? a * 2 : b * 2;
  console.log(max);
  console.log(max - (a + b));
}
