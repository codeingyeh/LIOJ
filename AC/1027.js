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
  let card = del(lines[0]);
  let sum = 0;
  for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0) {
      Number(card[i - 1]) * 2 >= 10
        ? (sum += Number(card[i - 1]) * 2 - 9)
        : (sum += Number(card[i - 1]) * 2);
    } else {
      sum += Number(card[i - 1]);
    }
  }
  let safeNum = sum % 10 === 0 ? 0 : 10 - (sum % 10);
  if (Number(card[15]) === safeNum) {
    if (card[0] === "4") {
      console.log("VISA");
    } else {
      console.log("MASTER_CARD");
    }
  } else {
    console.log("INVALID");
  }
}

function del(n) {
  let str = "";
  for (let i = 0; i < n.length; i++) {
    if (n[i] !== "-") {
      str += n[i];
    }
  }
  return str;
}
