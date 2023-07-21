const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  AntonAndLetters(input);
  rl.close();
});
//---------------------------------------- First Approach ----------------------------------------
function AntonAndLetters(input) {
  let matches = input.match(/[a-z]/g);
  if (matches == null) {
    console.log(0);
    return;
  }
  let set = new Set(matches);
  for (let i = 0; i < matches.length; i++) {
    set.add(matches[i]);
  }
  console.log(set.size);
}
