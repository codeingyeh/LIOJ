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
  let arr = lines[1].split(" ");
  let lastLevel = Number(arr[arr.length - 1]);
  let bigPlatform = 0;
  for (let i = 1; i <= lastLevel; i++) {
    let count = 0;
    for (let j = 0; j < lines[0]; j++) {
      if (Number(arr[j]) === i) {
        count++;
      } else if (Number(arr[j]) > i) {
        break;
      }
    }
    if (count > bigPlatform) {
      bigPlatform = count;
    }
  }
  console.log(bigPlatform);
}
