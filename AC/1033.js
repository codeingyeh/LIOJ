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
  let short = getDistance(lines[1], lines[2]);
  let index1 = lines[1].split(" ");
  let index2 = lines[2].split(" ");
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (getDistance(lines[i], lines[j]) < short) {
        short = getDistance(lines[i], lines[j]);
        index1 = lines[i].split(" ");
        index2 = lines[j].split(" ");
      }
    }
  }
  if (Number(index1[0]) < Number(index2[0])) {
    console.log(index1.join(" "));
    console.log(index2.join(" "));
  } else if (Number(index1[0]) > Number(index2[0])) {
    console.log(index2.join(" "));
    console.log(index1.join(" "));
  } else if (Number(index1[2]) < Number(index2[2])) {
    console.log(index1.join(" "));
    console.log(index2.join(" "));
  } else {
    console.log(index2.join(" "));
    console.log(index1.join(" "));
  }
}

function getDistance(a, b) {
  let position1 = a.split(" ");
  let position2 = b.split(" ");
  let x1 = Number(position1[0]);
  let x2 = Number(position2[0]);
  let y1 = Number(position1[1]);
  let y2 = Number(position2[1]);
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}
