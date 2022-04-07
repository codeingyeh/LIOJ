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
  let str = "";
  for (let i = 0; i < lines[1].length; i++) {
    if (lines[1].charCodeAt(i) + (n % 26) > 122) {
      str += String.fromCharCode(
        96 + (lines[1].charCodeAt(i) + (n % 26) - 122)
      );
    } else {
      str += String.fromCharCode(lines[1].charCodeAt(i) + (n % 26));
    }
  }
  console.log(str);
}
