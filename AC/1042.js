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
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65) {
      result += String.fromCharCode(str.charCodeAt(i) + 32);
    } else {
      result += str[i];
    }
  }
  console.log(result);
}
