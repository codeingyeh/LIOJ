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
  let [w, h] = lines[0].split(" ").map(Number);
  let map = lines.slice(1);
  let x = 0;
  let y = 0;
  let count = 0;
  for (let i = 0; i < map.length; i++) {
    map[i] = map[i].split("");
  }
  while (x !== w - 1 || y !== h - 1) {
    if (map[y][x + 1] === ".") {
      x++;
      map[y][x] = "o";
    } else if (map[y + 1][x] === ".") {
      y++;
      map[y][x] = "o";
    } else if (map[y][x - 1] === ".") {
      x--;
      map[y][x] = "o";
    } else if (map[y - 1][x] === ".") {
      y--;
      map[y][x] = "o";
    }
  }
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (map[i][j] === "o") {
        count++;
      }
    }
  }
  console.log(count);
}
