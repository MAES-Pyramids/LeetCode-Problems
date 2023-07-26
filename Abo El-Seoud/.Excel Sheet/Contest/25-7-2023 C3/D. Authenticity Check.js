const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputArray;

rl.on("line", (line) => {
  inputArray = line.split("").map((x) => x.toLocaleLowerCase());
  rl.close();
});

rl.on("close", () => FindTotalDebt(inputArray));
//--------------------------------------------------------
function FindTotalDebt(inputArray) {
  let targetKeyword = ["h", "e", "i", "d", "i"];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == targetKeyword[0]) {
      targetKeyword.shift();
    }
  }

  if (targetKeyword.length == 0) console.log("YES");
  else console.log("NO");
}
