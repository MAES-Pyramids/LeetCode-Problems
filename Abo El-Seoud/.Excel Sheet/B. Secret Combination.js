const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputArray = [];
let displayLength;
let linesCounter = 0;

rl.on("line", (line) => {
  linesCounter++;
  if (linesCounter == 1) {
    displayLength = parseInt(line);
  }
  if (linesCounter == 2) {
    inputArray = line.split("").map((val) => parseInt(val));
    rl.close();
  }
});

rl.on("close", () => DesiredState(displayLength, inputArray));
//--------------------------------------------------------
function DesiredState(displayLength, inputArray) {
  if (inputArray.every((val) => val == inputArray[0]) || displayLength == 1)
    return console.log("0".repeat(displayLength));

  let currentMinimum = 10000;
  let lastMinimum = 100000; // Initialize to a large value

  do {
    inputArray = inputArray.map((element) => (element + 1) % 10);
    if (inputArray[inputArray.length - 1] === 0) {
      inputArray.unshift(inputArray.pop());
      lastMinimum = currentMinimum;
      currentMinimum = Number(inputArray.join(""));
    }
  } while (currentMinimum < lastMinimum);

  console.log(currentMinimum);
  console.log(lastMinimum);

  let lastMinimumLength =
    displayLength - lastMinimum.toString().split("").length;
  console.log(`${"0".repeat(lastMinimumLength)}${lastMinimum}`);
}
// DesiredState(3, [5, 7, 9]);
// DesiredState(4, [2, 0, 1, 4]);
// DesiredState(5, [4, 6, 8, 0, 2]);
// DesiredState(10, [4, 4, 4, 7, 4, 4, 4, 4, 4, 4]);
