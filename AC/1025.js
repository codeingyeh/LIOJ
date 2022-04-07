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
  let n = Number(tmp[0]);
  let m = Number(tmp[1]);
  for (let i = n; i <= m; i++) {
    let arr = i.toString().split("");
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += Number(arr[j]) ** arr.length;
    }
    if (sum === i) {
      console.log(i);
    }
  }
}
