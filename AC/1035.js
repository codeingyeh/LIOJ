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
  let arr = [];
  for (i = 0; i < 100; i++) {
    arr[i] = 0;
  }
  for (let i = 1; i <= n; i++) {
    arr[Number(lines[i]) - 1]++;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      console.log(i + 1);
    }
  }
}
