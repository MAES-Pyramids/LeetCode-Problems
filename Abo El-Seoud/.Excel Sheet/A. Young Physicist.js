const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numberOFVectors;
let vectorNestedArray = [];

const getInputAsync = async () => {
  return new Promise((resolve) => {
    rl.question("", (line) => {
      resolve(line);
    });
  });
};

const readVectors = async () => {
  numberOFVectors = parseInt(await getInputAsync());
  for (let i = 0; i < numberOFVectors; i++) {
    const line = await getInputAsync();
    vectorNestedArray.push(line.split(" ").map((val) => parseInt(val)));
  }

  FindNetForce(numberOFVectors, vectorNestedArray);
  rl.close();
};

readVectors();

//--------------------------------------------------------
function FindNetForce(numberOFVectors, vectorNestedArray) {
  let [x, y, z] = [0, 0, 0];
  for (let i = 0; i < numberOFVectors; i++) {
    x += vectorNestedArray[i][0];
    y += vectorNestedArray[i][1];
    z += vectorNestedArray[i][2];
  }
  if (x == 0 && y == 0 && z == 0) process.stdout.write("YES");
  else process.stdout.write("NO");
}
