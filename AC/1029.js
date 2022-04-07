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
  let tmp = lines[0].split(" ");
  let a = +tmp[0];
  let b = +tmp[2];
  let operator = tmp[1];
  switch (operator) {
    case "+":
      console.log(`${a + b}`);
      break;
    case "-":
      console.log(`${a - b}`);
      break;
    case "*":
      console.log(`${a * b}`);
      break;
    case "/":
      console.log(`${a / b}`);
      break;
  }
}
