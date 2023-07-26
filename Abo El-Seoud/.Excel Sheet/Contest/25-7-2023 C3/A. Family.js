const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let linesCounter = 0;
let N;

rl.on("line", (line) => {
  linesCounter++;
  if (linesCounter == 1) {
    N = parseInt(line);
    rl.close();
  }
});

rl.on("close", () => FindTotalDebt(N));
//--------------------------------------------------------
function FindTotalDebt(N) {
  for (let i = 0; i < N; i++) {
    console.log("FAMILY IS ALL");
  }
}
