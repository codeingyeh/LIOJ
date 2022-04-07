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
  let index = 1;
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let tmp = [];
    let end = index + 4;
    for (let j = index; j < end; j++) {
      tmp.push(Number(lines[j]));
    }
    arr.push(tmp);
    index += 4;
  }
  for (let i = 0; i < arr.length; i++) {
    let distance = Math.sqrt(
      (arr[i][0] - arr[i][2]) ** 2 + (arr[i][1] - arr[i][3]) ** 2
    );
    console.log(distance.toFixed(2));
  }
}
