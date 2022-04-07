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
  let tmp = lines[1].split(" ");
  let total = tmp.reduce((sum, currentVlaue) => sum + Number(currentVlaue), 0);
  total / +lines[0] >= 183 ? console.log("real") : console.log("fake");
}
