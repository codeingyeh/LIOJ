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
  let [n, w] = lines[0].split(" ").map(Number);
  let items = lines.slice(1, n + 1);
  let arr = Array(w).fill(0);
  for (let i = 0; i < items.length; i++) {
    let [W, V] = items[i].split(" ").map(Number);
    items[i] = { weigth: W, value: V };
  }

  for (let i = 0; i < items.length; i++) {
    let temp = [...arr];
    for (let j = 0; j < w; j++) {
      let newValue = items[i].value;
      if (j - (items[i].weigth - 1) > 0) {
        newValue += temp[j - items[i].weigth];
      }
      if (newValue > arr[j] && items[i].weigth <= j + 1) {
        arr[j] = newValue;
      }
    }
  }
  console.log(arr[arr.length - 1]);
}
