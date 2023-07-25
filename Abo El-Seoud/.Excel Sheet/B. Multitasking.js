// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let linesCounter = 0;
// let inputArray = [];
// let NumberOfLines, NumberOfDigits, sorting;

// rl.on("line", (line) => {
//   linesCounter++;
//   if (linesCounter == 1) {
//     [NumberOfLines, NumberOfDigits, sorting] = line
//       .split(" ")
//       .map((val) => parseInt(val));
//   } else {
//     inputArray.push(line.split(" ").map((val) => parseInt(val)));
//   }

//   if (linesCounter === NumberOfLines + 1) rl.close();
// });

// rl.on("close", () => FindIndicesPairs(NumberOfDigits, sorting, inputArray));
//--------------------------------------------------------
function FindIndicesPairs(NumberOfDigits, sorting, inputArray) {
  let indicesPairs = [];

  inputArray.forEach((element) => {
    for (let i = 0; i < element.length; i++) {
      for (let j = NumberOfDigits - 1; j > i; j--) {
        if (sorting == 0) {
          if (element[i] > element[j]) {
            indicesPairs.push(`${i + 1} ${j + 1}`);
            [element[i], element[j]] = [element[j], element[i]];
          }
        }
        if (sorting == 1) {
          if (element[i] < element[j]) {
            indicesPairs.push(`${i + 1} ${j + 1}`);
            [element[i], element[j]] = [element[j], element[i]];
          }
        }
      }
    }
  });

  console.log(indicesPairs.length);
  indicesPairs.forEach((element) => {
    console.log(element);
  });
}
FindIndicesPairs(5, 0, [
  [1, 3, 2, 5, 4],
  [1, 4, 3, 2, 5],
]);
// FindIndicesPairs(3, 1, [
//   [1, 2],
//   [2, 3],
//   [3, 4],
// ]);
