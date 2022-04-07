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
  let str = lines[0];
  let n = +lines[1];
  let result = "";
  for (let i = 0; i < n; i++) {
    i + 1 !== n ? (result += lines[i + 2] + str) : (result += lines[i + 2]);
  }
  console.log(result);
}
