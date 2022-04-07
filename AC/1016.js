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
  let a = lines.filter((word) => word === "A").length;
  let b = lines.filter((word) => word === "B").length;
  let few = "";
  if (a === b || a === 0 || b === 0) {
    console.log("PEACE");
    return;
  } else if (a > b) {
    few = "B";
  } else {
    few = "A";
  }
  for (let i = 1; i <= Number(lines[0]); i++) {
    if (lines[i] === few) {
      console.log(i);
    }
  }
}
