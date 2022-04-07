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
  let arr = lines[1].split(" ");
  let value = +arr[1] / +arr[0];
  for (i = 2; i < Number(lines[0]); i++) {
    if (+arr[i] / +arr[i - 1] !== value) {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
}
