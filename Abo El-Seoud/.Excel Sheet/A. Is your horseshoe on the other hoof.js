const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  horseshoeNumber(input.split(" "));
  rl.close();
});
//----------------------------------------
function horseshoeNumber(inputArray) {
  let set = new Set();
  for (let i = 0; i < inputArray.length; i++) {
    set.add(inputArray[i]);
  }
  console.log(inputArray.length - set.size);
}
