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
  let str = lines[0];
  let target = lines[1];
  let end = "";
  for (let i = str.length - target.length; i < str.length; i++) {
    end += str[i];
  }
  if (end === target) {
    console.log("true");
  } else {
    console.log("false");
  }
}
