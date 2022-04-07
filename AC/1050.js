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
  let tmp = lines[0].split(" ");
  let n = +tmp[0];
  let target = +tmp[1];
  let arr = lines[1].split(" ").map(Number);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(`${i} ${j}`);
      }
    }
  }
}
