const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let linesCounter = 0;
let NumberOfTestCases;
let InputNestedArray = [];

rl.on("line", (line) => {
  linesCounter++;
  if (linesCounter == 1) {
    NumberOfTestCases = parseInt(line);
  } else {
    if (linesCounter % 2 != 0) {
      InputNestedArray.push(line.split(" ").map((val) => parseInt(val)));
    }
  }

  if (linesCounter == NumberOfTestCases * 2 + 1) rl.close();
});

rl.on("close", () => FindTotalDebt(InputNestedArray));
//--------------------------------------------------------
function FindTotalDebt(inputNestedArray) {
  inputNestedArray.forEach((element) => {
    let testMap = new Map();
    for (let i = 0; i < element.length; i++) {
      if (testMap.has(element[i])) {
        testMap.set(element[i], testMap.get(element[i]) + 1);
      } else {
        testMap.set(element[i], 1);
      }
    }
    if ([...testMap.values()].every((val) => val == 1)) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  });
}
