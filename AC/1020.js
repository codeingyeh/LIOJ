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
  for (let i = 1; i <= Number(lines[0]); i++) {
    if (isPrime(Number(lines[i]))) {
      console.log("Prime");
    } else {
      console.log("Composite");
    }
  }
}
function isPrime(n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
