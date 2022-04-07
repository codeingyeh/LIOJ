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
    let num = Number(lines[i]);
    let sum = 0;
    let sum2 = 0;
    if (num === 0) {
      return;
    }
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    for (let i = 1; i < sum; i++) {
      if (sum % i === 0) {
        sum2 += i;
      }
    }
    if (sum2 === num) {
      console.log(sum);
    } else {
      console.log("QQ");
    }
  }
}
