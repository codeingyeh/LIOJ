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
  let result = "";
  for (let i = lines[0].length - 1; i >= 0; i--) {
    result += lines[0][i];
  }
  console.log(result);
}
