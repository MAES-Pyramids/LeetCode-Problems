const readline = require("readline");

function readInput() {
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
    const array = arrayData.split("");
    Footprints(array);
  });
}

readInput();

//--------------------------------------------------------
function Footprints(array) {
  if (array.includes("L") && array.includes("R")) {
    let start = array.indexOf("R") + 1;
    let end = array.indexOf("L");
    console.log(start, end);
  }
  if (array.includes("R") && !array.includes("L")) {
    let lastR = array.lastIndexOf("R") + 2;
    console.log(array.indexOf("R") + 1, lastR);
  }
  if (array.includes("L") && !array.includes("R")) {
    let StartL = array.lastIndexOf("L") + 1;
    console.log(StartL, array.indexOf("L"));
  }
}
