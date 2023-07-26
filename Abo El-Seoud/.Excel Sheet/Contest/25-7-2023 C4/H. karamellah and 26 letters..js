const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputMap = new Map();
let stringLength = 0;
let lineCounter = 0;

rl.on("line", (line) => {
  lineCounter++;
  if (lineCounter == 1) {
    stringLength = parseInt(line);
  }
  if (lineCounter == 2) {
    inputArray = line.split("").map((i) => {
      if (inputMap.has(i)) {
        inputMap.set(i, inputMap.get(i) + 1);
      } else {
        inputMap.set(i, 1);
      }
    });
    rl.close();
  }
});

rl.on("close", () => FindTotalDebt(stringLength, inputMap));
//--------------------------------------------------------
function FindTotalDebt(stringLength, inputMap) {
  let requiredNumberOfOperations = 0;
  [...inputMap.values()].forEach((item) => {
    if (item > 1) {
      requiredNumberOfOperations += item - 1;
    }
  });
  console.log(requiredNumberOfOperations);
}
