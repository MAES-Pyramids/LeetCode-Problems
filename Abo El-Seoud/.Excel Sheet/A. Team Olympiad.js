const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let studentNumber, studentArray;

rl.question("", (num) => {
  studentNumber = parseInt(num);
  rl.question("", (array) => {
    studentArray = array.split(" ").map((val) => parseInt(val));
    FindValue(studentNumber, studentArray);
    rl.close();
  });
});
//--------------------------------------------------------
function FindValue(studentNumber, stdArray) {
  let valuesMap = new Map();
  let indexMap = new Map();
  if (studentNumber < 3) return process.stdout.write("0");
  for (let i = 0; i < studentNumber; i++) {
    if (valuesMap.has(stdArray[i])) {
      valuesMap.set(stdArray[i], valuesMap.get(stdArray[i]) + 1);
      indexMap.set(stdArray[i], indexMap.get(stdArray[i]) + " " + (i + 1));
    } else {
      valuesMap.set(stdArray[i], 1);
      indexMap.set(stdArray[i], i + 1);
    }
  }
  if (valuesMap.size < 3) return process.stdout.write("0");
  let min = Math.min(...valuesMap.values());
  let indexArray = [...indexMap.values()];
  let result = [];

  for (let j = 0; j < min; j++) {
    let temp = [];
    indexArray.forEach((val) => {
      if (typeof val === "string") temp.push(val.split(" ")[j]);
      else temp.push(val);
    });
    result.push(temp);
  }

  console.log(min);
  console.log(result.map((val) => val.join(" ")).join("\n"));
}
