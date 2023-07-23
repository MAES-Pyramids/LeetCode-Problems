function PrintSnakeTower(numberOFSnakes, snakesArray) {
  let sortedSnakes = [...snakesArray].sort((a, b) => b - a);
  let shiftedArray = [];

  for (let i = 0; i < numberOFSnakes; i++) {
    if (snakesArray[i] == sortedSnakes[0]) {
      process.stdout.write(`${snakesArray[i]} `);
      sortedSnakes.shift();

      for (let j = 0; j < shiftedArray.length; j++) {
        if (
          shiftedArray[j] < snakesArray[i] &&
          shiftedArray[j] >= sortedSnakes[0]
        ) {
          process.stdout.write(`${shiftedArray[j]} `);
          shiftedArray.splice(j, 1);
          j--;
        }
      }
    } else {
      console.log();
      shiftedArray.push(snakesArray[i]);
    }
  }
  if (shiftedArray.length > 0) {
    shiftedArray
      .sort((a, b) => b - a)
      .map((snake) => process.stdout.write(`${snake} `));
  }
}
// PrintSnakeTower(3, [3, 1, 2]);
PrintSnakeTower(5, [4, 5, 1, 2, 3]);
// PrintSnakeTower(10, [10, 9, 6, 7, 8, 3, 4, 5, 1, 2]);
