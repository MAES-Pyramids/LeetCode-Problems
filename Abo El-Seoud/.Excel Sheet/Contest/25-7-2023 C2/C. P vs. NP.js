const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let NumberOfLines;
let linesCounter = 0;
let totalDebtMap = [];

rl.on("line", (line) => {
  linesCounter++;

  if (linesCounter == 1) {
    NumberOfLines = parseInt(line);
  } else {
    totalDebtMap.push(line.split(" ").map((val) => parseInt(val)));
  }

  if (linesCounter === NumberOfLines + 1) rl.close();
});

rl.on("close", () => FindTotalDebt(totalDebtMap));
//--------------------------------------------------------
function FindTotalDebt(totalDebtMap) {
  let result = [];
  totalDebtMap.forEach((element) => {
    let value = Math.ceil(element[0] / element[1]);
    result.push(value * element[1] - element[0]);
  });
  result.forEach((element) => console.log(element));
}
