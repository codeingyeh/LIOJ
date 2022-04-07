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
  let col1 = [];
  let col2 = [];
  let seat = [];

  for (let i = 1; i <= Number(lines[0]); i++) {
    if (i % 2) {
      col1.push(i);
    } else {
      col2.push(i);
    }
  }
  for (let i = 0; i < col1.length; i++) {
    let rowTmp = [];
    let col1Tmp = [];
    let col2Tmp = [];
    rowTmp.push(col1[i], col2[i]);
    if (i < col1.length - 1) {
      col1Tmp.push(col1[i], col1[i + 1]);
      col2Tmp.push(col2[i], col2[i + 1]);
      seat.push(col1Tmp, col2Tmp);
    }
    seat.push(rowTmp);
  }
  for (let i = 0; i < Number(lines[1]); i++) {
    let delNum = Number(lines[i + 2]);
    seat = seat.filter(function (n) {
      return n.indexOf(delNum) === -1;
    });
  }
  console.log(seat.length);
}
