const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  input = input.toLowerCase().split(" ");
  EvenAndOdds(input);
  rl.close();
});
//---------------------------------------- First Approach ----------------------------------------
// function EvenAndOdds([a, b]) {
//   let evenArray = [];
//   let oddArray = [];
//   for (let i = 1; i <= a; i++) {
//     if (i % 2 == 0) {
//       evenArray.push(i);
//     } else {
//       oddArray.push(i);
//     }
//   }
//   let resultArray = oddArray.concat(evenArray);
//   console.log(resultArray[b - 1]);
// }
//---------------------------------------- Second Approach ----------------------------------------
// function EvenAndOdds([a, b]) {
//   let evenArray = [2];
//   let oddArray = [1];
//   let iterationNumber = a % 2 == 0 ? a / 2 : Math.ceil(a / 2);
//   for (let i = 1; i < iterationNumber; i++) {
//     let nextEvenNumber =
//       evenArray[evenArray.length - 1] + 2 <= a
//         ? evenArray[evenArray.length - 1] + 2
//         : null;
//     let nextOddNumber =
//       oddArray[oddArray.length - 1] + 2 <= a
//         ? oddArray[oddArray.length - 1] + 2
//         : null;
//     if (nextEvenNumber) evenArray.push(nextEvenNumber);

//     if (nextOddNumber) oddArray.push(nextOddNumber);
//   }
//   let resultArray = oddArray.concat(evenArray);
//   console.log(resultArray[b - 1]);
// }
//---------------------------------------- Third Approach ----------------------------------------
function EvenAndOdds([a, b]) {
  let lastOddNumber = a % 2 == 0 ? a / 2 : Math.ceil(a / 2);
  if (b <= lastOddNumber) {
    console.log(b * 2 - 1);
  } else {
    console.log((b - lastOddNumber) * 2);
  }
}
