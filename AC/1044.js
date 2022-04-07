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
  let s = lines[0];
  let n = Number(lines[1]);
  let str = lines[2];
  if (s.length >= n) {
    console.log(s);
  } else {
    console.log(fillStr(s, str, n - s.length));
  }
}
function fillStr(s, str, n) {
  let result = s;
  for (let i = 1; i <= n; i++) {
    let index = i % str.length;
    if (index === 0) {
      result += str[str.length - 1];
    } else {
      result += str[index - 1];
    }
  }
  return result;
}
