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
  let member = [];
  let winner = [];
  for (let i = 1; i <= Number(lines[0]); i++) {
    let tmp = lines[i].split(" ");
    member.push({ name: tmp[0], score: Number(tmp[1]) });
  }
  member.sort(function (a, b) {
    return a.score - b.score;
  });
  for (let i = 0; i < member.length; i++) {
    if (member[i].score === member[member.length - 1].score) {
      winner.push(member[i].name);
    }
  }
  for (let i = 0; i < winner.length; i++) {
    console.log(winner[i]);
  }
}
