const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  input = input.split("");
  SumOfDigits(input);
  rl.close();
});
// ----------------------------------------
function SumOfDigits(inputArray) {
  let numberOFSpells = 0;
  while (inputArray.length > 1) {
    let newSpell = 0;
    inputArray.forEach((element) => {
      newSpell += parseInt(element);
    });
    inputArray = [...newSpell.toString().split("")];
    numberOFSpells++;
  }
  console.log(numberOFSpells);
}
// SumOfDigits([0]);
// SumOfDigits([1, 0]);
// SumOfDigits([9, 9, 1]);
