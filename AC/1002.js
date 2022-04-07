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
  for (let i = 0; i < lines.length; i++) {
    let tmp = lines[i].split(" ");
    let a = Number(tmp[0]);
    let b = Number(tmp[1]);
    if (a > b) {
      console.log(a);
    } else if (a === 0 && b === 0) {
      return;
    } else {
      console.log(b);
    }
  }
}
