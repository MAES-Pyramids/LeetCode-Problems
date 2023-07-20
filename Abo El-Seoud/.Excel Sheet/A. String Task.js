const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  input = input.toLowerCase().split("");
  StringTask(input);
  rl.close();
});
//----------------------------------------
function StringTask(inputArray) {
  let vowels = ["a", "o", "y", "e", "u", "i"];
  for (let i = 0; i < inputArray.length; i++) {
    if (vowels.includes(inputArray[i])) {
      inputArray.splice(i, 1);
      i--;
    }
  }
  inputArray.unshift("");
  console.log(inputArray.join("."));
}
// StringTask("aBAcAba".toLowerCase().split(""));
