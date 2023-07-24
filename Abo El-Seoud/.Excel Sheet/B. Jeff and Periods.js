const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", (line) => {
  lines.push(line);
  if (lines.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  const arrayData = lines[1].trim();
  const array = arrayData.split(" ");
  findCommonDifference(array);
});
//--------------------------------------------------------  First Approach
// function CommonDifference(array) {
//   let map = new Map();
//   for (let i = 0; i < array.length; i++) {
//     if (map.has(array[i])) {
//       map.set(array[i], [...map.get(array[i]), i]);
//     } else {
//       map.set(array[i], [i]);
//     }
//   }
//   let printedArray = [];
//   [...map.entries()]
//     .sort((a, b) => a[0] - b[0])
//     .forEach((element) => {
//       if (element[1].length === 1) {
//         printedArray.push([element[0], 0]);
//       } else {
//         let [difference, flag] = [element[1][1] - element[1][0], true];
//         for (let i = 1; i < element[1].length; i++) {
//           if (element[1][i] - element[1][i - 1] != difference) {
//             flag = false;
//             break;
//           }
//         }
//         if (flag) printedArray.push([element[0], difference]);
//       }
//     });
//   console.log(printedArray.length);
//   printedArray.forEach((element) => {
//     console.log(element[0], element[1]);
//   });
// }
//--------------------------------------------------------  Second Approach
function findCommonDifference(array) {
  const map = new Map();
  let uniqueFlag = true;

  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if (map.has(currentValue)) {
      map.get(currentValue).push(i);
      uniqueFlag = false;
    } else {
      map.set(currentValue, [i]);
    }
  }

  if (uniqueFlag) {
    console.log(array.length);
    return console.log(
      array
        .sort((a, b) => a - b)
        .map((element) => `${element} 0`)
        .join("\n")
    );
  }

  const printedArray = [];
  [...map.entries()]
    .sort((a, b) => a[0] - b[0])
    .forEach((entry) => {
      const elements = entry[1];
      if (elements.length === 1) {
        printedArray.push([entry[0], 0]);
      } else {
        const numberOfElements = elements.length;
        const commonDifference1 = elements[1] - elements[0];
        const commonDifference2 =
          (elements[elements.length - 1] - elements[0]) /
          (numberOfElements - 1);

        if (commonDifference1 == commonDifference2) {
          printedArray.push([entry[0], commonDifference1]);
        }
      }
    });

  console.log(printedArray.length);
  printedArray.forEach((element) => {
    console.log(element[0], element[1]);
  });
}
