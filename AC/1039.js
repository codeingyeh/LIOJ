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
  let n = +lines[1];
  for (let i = 0; i < n; i++) {
    lines[i + 2] = target;
    console.log(lines[i + 2]);
  }
}
