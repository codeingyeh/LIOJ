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
  let a = [];
  let m = [];
  for (let i = 1; i <= tmp[0]; i++) {
    a.push(Number(lines[i]));
  }

  for (
    let i = 1 + Number(tmp[0]);
    i < 1 + Number(tmp[0]) + Number(tmp[1]);
    i++
  ) {
    m.push(Number(lines[i]));
  }
  for (let i = 0; i < m.length; i++) {
    let index = -1;
    for (let j = 0; j < a.length; j++) {
      if (a[j] === m[i]) {
        index = j;
        break;
      }
    }
    console.log(index);
  }
}
