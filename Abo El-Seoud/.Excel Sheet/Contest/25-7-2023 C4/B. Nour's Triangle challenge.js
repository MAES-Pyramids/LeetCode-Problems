const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputArray = [];
let lineCounter = 0;

rl.on("line", (line) => {
  lineCounter++;
  if (lineCounter == 2) {
    inputArray = line.split(" ").map((i) => parseInt(i));
    rl.close();
  }
});

rl.on("close", () => FindTotalDebt(inputArray));
//--------------------------------------------------------
function FindTotalDebt(inputArray) {
  // let filtered = inputArray.filter(
  //   (item, index) => inputArray.indexOf(item) === index
  // );

  filtered.sort((a, b) => a - b);

  let resultArray = filtered.slice(-3);
  if (resultArray[0] + resultArray[1] > resultArray[resultArray.length - 1]) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
