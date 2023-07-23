const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (line) => {
  lines.push(line);
  if (lines.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  const arrayData = lines[1].trim();
  const array = arrayData.split(" ");
  CommonDifference(array);
});

//--------------------------------------------------------
function CommonDifference(array) {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) {
      map.set(array[i], [...map.get(array[i]), i]);
    } else {
      map.set(array[i], [i]);
    }
  }
  console.log(map.size);
  [...map.entries()].forEach((element) => {
    if (element[1].length === 1) {
      console.log(element[0], 0);
    } else {
      let [difference, flag] = [element[1][1] - element[1][0], true];
      for (let i = 1; i < element[1].length; i++) {
        if (element[1][i] - element[1][i - 1] != difference) {
          flag = false;
          break;
        }
      }
      if (flag) console.log(element[0], difference);
    }
  });
}
