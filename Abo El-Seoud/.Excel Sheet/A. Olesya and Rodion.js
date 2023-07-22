const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let studentNumber, studentArray;

rl.question("", (input) => {
  let [requiredLength, divisibleBy] = input.split(" ");
  FindNUmber(requiredLength, divisibleBy);
  rl.close();
});
//-------------------------------------------------------- First Approach
// function FindNUmber(requiredLength, divisibleBy) {
//   let StartNumber = `1${"0".repeat(requiredLength - 1)}`;
//   let EndNumber = `1${"0".repeat(requiredLength)}`;
//   for (let i = StartNumber; i < EndNumber; i++) {
//     if (i % divisibleBy == 0) {
//       console.log(i);
//       return;
//     }
//   }
//   console.log(-1);
// }
//-------------------------------------------------------- Second Approach
function FindNUmber(requiredLength, divisibleBy) {
  let StartNumber = `1${"0".repeat(requiredLength - 1)}`;
  let EndNumber = `1${"0".repeat(requiredLength)}`;
  let result = Number(StartNumber) * divisibleBy;
  if (divisibleBy == 10 && StartNumber % 10 == 0) {
    return console.log(StartNumber);
  } else if (result < EndNumber) {
    console.log(result.toLocaleString().match(/\d+/g).join(""));
  } else {
    console.log(-1);
  }
}
