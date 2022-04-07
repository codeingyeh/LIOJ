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
  let arr = [1, 1];
  for (let i = 2; i < 21; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  console.log(arr[n - 1]);
}
