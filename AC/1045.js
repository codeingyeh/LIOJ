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
  let start = Number(lines[1]);
  let end = Number(lines[2]);
  let result = "";
  for (let i = start; i < end; i++) {
    result += str[i];
  }
  console.log(result);
}
