const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  HelpfulMath(input);
  rl.close();
});
//---------------------------------------- First Approach ----------------------------------------
function HelpfulMath(input) {
  let matches = input
    .match(/\d/g)
    .sort((a, b) => a - b)
    .join("+");
  console.log(matches);
}
