const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = parseInt(line);
  rl.close();
});

rl.on("close", () => FindTotalDebt(input));
//--------------------------------------------------------
function FindTotalDebt(input) {
  let flag = true;
  while (input > 0) {
    if (input <= 3) {
      flag = true;
      break;
    } else {
      temp = input;
      if (temp - 3 > 3) {
        input -= 3;
      } else if (temp - 2 > 3) {
        input -= 2;
      } else {
        input -= 1;
      }
      flag = false;
    }

    if (input <= 3) {
      flag = false;
      break;
    } else {
      temp = input;
      if (temp - 3 > 3) {
        input -= 3;
      } else if (temp - 2 > 3) {
        input -= 2;
      } else {
        input -= 1;
      }
      flag = true;
    }
  }
  console.log(flag ? "Emad" : "Joker");
}
// FindTotalDebt(2);
// FindTotalDebt(4);
// FindTotalDebt(8);
