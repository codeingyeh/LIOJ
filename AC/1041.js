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
  for (let i = 0; i < str.length; i++) {
    if (str[0] === " ") {
      str = str.slice(1);
    } else {
      break;
    }
  }
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[str.length - 1] === " ") {
      str = str.slice(0, -1);
    } else {
      break;
    }
  }
  console.log(str);
}
