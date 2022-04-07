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
  let n = Number(lines[0]);
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}
