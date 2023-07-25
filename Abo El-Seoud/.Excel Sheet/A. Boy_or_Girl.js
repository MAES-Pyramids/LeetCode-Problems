const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  input = input.toLowerCase().split("");
  boyOrGirl(input);
  rl.close();
});
//----------------------------------------
function boyOrGirl(inputArray) {
  let set = new Set();
  for (let i = 0; i < inputArray.length; i++) {
    set.add(inputArray[i]);
  }
  console.log(set.size % 2 == 0 ? "CHAT WITH HER!" : "IGNORE HIM!");
}
