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
  for (let i = 1; i <= Number(lines[0]); i++) {
    console.log("*".repeat(i));
  }
}
