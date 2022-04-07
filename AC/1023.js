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
  let trunk = " ".repeat(Number(lines[0]) - 1) + "|";
  for (let i = 1; i <= Number(lines[0]); i++) {
    let str = " ".repeat(Number(lines[0]) - i) + "*".repeat(i * 2 - 1);
    console.log(str);
  }
  for (let i = 1; i < Number(lines[0]); i++) {
    console.log(trunk);
  }
}
