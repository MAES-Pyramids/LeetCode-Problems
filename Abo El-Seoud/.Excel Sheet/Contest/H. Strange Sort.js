const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let InputMap = new Map();
let linesCounter = 0;
let lengthOfArray;

rl.on("line", (line) => {
  linesCounter++;
  if (linesCounter == 1) {
    lengthOfArray = parseInt(line);
  } else {
    line.split(" ").map((val) => {
      if (InputMap.has(val)) {
        InputMap.set(val, InputMap.get(val) + 1);
      } else {
        InputMap.set(val, 1);
      }
    });
    rl.close();
  }
});

rl.on("close", () => FindTotalDebt(lengthOfArray, InputMap));

//--------------------------------------------------------

function FindTotalDebt(lengthOfArray, InputMap) {
  let swapperArray = [...InputMap.entries()].sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0].localeCompare(a[0]); // Sort lexicographically by value if frequencies are equal
    }
    return a[1] - b[1]; // Sort by frequency
  });

  let result = [];

  for (let i = 0; i < swapperArray.length; i++) {
    if (swapperArray[i][1] !== 1) {
      for (let j = 0; j < swapperArray[i][1]; j++) {
        result.push(swapperArray[i][0]);
      }
    } else {
      result.push(swapperArray[i][0]);
    }
  }

  console.log(result.join(" "));
}
