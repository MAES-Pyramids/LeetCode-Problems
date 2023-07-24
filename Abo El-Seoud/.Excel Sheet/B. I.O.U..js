const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let linesCounter = 0;
let NumberOfLines, n;
let totalDebtMap = new Map();

rl.on("line", (line) => {
  linesCounter++;
  if (linesCounter == 1) {
    [n, NumberOfLines] = line.split(" ").map((val) => parseInt(val));
  } else {
    let [sender, receiver, loan] = line.split(" ").map((val) => parseInt(val));

    if (totalDebtMap.has(sender))
      totalDebtMap.set(sender, totalDebtMap.get(sender) - loan);
    else totalDebtMap.set(sender, -loan);

    if (totalDebtMap.has(receiver))
      totalDebtMap.set(receiver, totalDebtMap.get(receiver) + loan);
    else totalDebtMap.set(receiver, loan);
  }

  if (linesCounter === NumberOfLines + 1) rl.close();
});

rl.on("close", () => FindTotalDebt(totalDebtMap));
//--------------------------------------------------------
function FindTotalDebt(totalDebtMap) {
  let totalDebt = 0;
  for (let [key, value] of totalDebtMap) {
    if (value > 0) {
      totalDebt += value;
    }
  }
  console.log(totalDebt);
}
