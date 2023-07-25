const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let linesCounter = 0;
let Name;

rl.on("line", (line) => {
  linesCounter++;
  if (linesCounter == 1) {
    Name = line.toString();
    rl.close();
  }
});

rl.on("close", () => FindTotalDebt(Name));
//--------------------------------------------------------
function FindTotalDebt(Name) {
  console.log(`Mohamed Salah`);
}
