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
  let x = lines[1].split(" ").map(Number);
  let y = lines[2].split(" ").map(Number);
  let min = Math.abs(x[0] - y[0]);
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
      let tmp = Math.abs(Number(x[i]) - Number(y[j]));
      if (tmp < min) {
        min = tmp;
        if (Math.abs(x[i] - y[j + 1]) > min) {
          break;
        }
      }
    }
  }
  console.log(min);
}
