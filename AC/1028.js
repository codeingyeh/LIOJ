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
  console.log(sum(del(lines[0])));
}
function sum(str) {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    total += Number(str[i]);
  }
  if (total >= 10) {
    total = sum(total.toString());
  }
  return total;
}

function del(n) {
  let str = "";
  for (let i = 0; i < n.length; i++) {
    if (n[i] !== " ") {
      str += n[i];
    }
  }
  return str;
}
