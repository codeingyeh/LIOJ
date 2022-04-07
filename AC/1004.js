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
  let m = Number(lines[0]);
  for (let i = 1; i <= m; i++) {
    let tmp = lines[i].split(" ");
    let a = BigInt(tmp[0]);
    let b = BigInt(tmp[1]);
    let k = Number(tmp[2]);
    if (a < 0n || b < 0n || tmp[0].length > 512 || tmp[1].length > 512) {
      return;
    }
    if (a > b) {
      k > 0 ? console.log("A") : console.log("B");
    } else if (a === b) {
      console.log("DRAW");
    } else {
      k > 0 ? console.log("B") : console.log("A");
    }
  }
}
