const readline = require("readline");

function readInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let k;
  let inputArray = [];

  rl.once("line", (line) => {
    const [n, kValue] = line.split(" ").map(Number);
    k = kValue;
    rl.on("line", (line) => {
      inputArray.push(parseInt(line, 10));
      if (inputArray.length === n) {
        rl.close();
      }
    });
  });

  rl.on("close", () => {
    GoodNumber(k, inputArray);
  });
}

readInput();
//---------------------------------------------------------------
function GoodNumber(k, inputArray) {
  let result = 0;
  for (let i = 0; i < inputArray.length; i++) {
    let set = new Set();
    let sortedElement = inputArray[i].toString().split("").sort();
    if (sortedElement.at(-1) <= k) {
      sortedElement.forEach((element) => set.add(element));
      set.size == k + 1 ? result++ : result;
    }
  }
  console.log(result);
}
