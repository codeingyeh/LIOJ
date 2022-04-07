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
  let str = "";
  let result = "";
  let nArr = lines.slice(0, Number(lines[0]) + 1);
  let mArr = lines.slice(Number(lines[0]) + 1);
  for (let i = 1; i < nArr.length; i++) {
    str += nArr[i];
  }
  for (let i = 1; i <= Number(mArr[0]); i++) {
    result += str.charAt(Number(mArr[i]) - 1);
  }
  console.log(result);
}
