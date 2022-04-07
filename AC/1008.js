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
  let water = Number(lines[0]);
  let bucket = 0;
  for (let i = 31; i >= 0; i--) {
    if (water >= 2 ** i) {
      water = water % 2 ** i;
      bucket++;
    }
  }
  console.log(bucket);
}
