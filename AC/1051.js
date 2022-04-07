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
  let a = lines[1].split(" ").map(Number);
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (a[i] > a[j]) {
        count++;
      }
    }
  }
  console.log(count);
}
