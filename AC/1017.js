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
  let items = [];
  let max = 0;
  for (let i = 2; i <= Number(lines[1]) + 1; i++) {
    items.push(+lines[i]);
  }
  if (Number(lines[0]) >= Number(lines[1])) {
    console.log(items.reduce((sum, currentVlaue) => sum + currentVlaue, 0));
    return;
  }
  items.sort((a, b) => a - b);
  for (let i = 0; i < Number(lines[0]); i++) {
    max += items[items.length - (i + 1)];
  }
  console.log(max);
}
