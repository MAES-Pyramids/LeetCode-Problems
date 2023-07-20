function FindValue(array) {
  for (let i = 0; i < 3; i++) {
    let row1 = array[i];
    let row2 = array[i + 1];
    for (let j = 0; j < 3; j++) {
      let countHash = 0;
      let countDot = 0;

      let row1Colum1 = row1[j];
      row1Colum1 === "#" ? countHash++ : countDot++;

      let row1Colum2 = row1[j + 1];
      row1Colum2 === "#" ? countHash++ : countDot++;

      let row2Colum1 = row2[j];
      row2Colum1 === "#" ? countHash++ : countDot++;

      let row2Colum2 = row2[j + 1];
      row2Colum2 === "#" ? countHash++ : countDot++;

      if (
        countHash === 3 ||
        countHash === 4 ||
        countDot === 3 ||
        countDot === 4
      ) {
        console.log("YES");
        return;
      }
    }
  }
  console.log("NO");
}
FindValue([
  ["#", "#", "#", "#"],
  [".", "#", ".", "."],
  ["#", "#", "#", "#"],
  [".", ".", ".", "."],
]);
// FindValue([
//   ["#", "#", "#", "#"],
//   [".", ".", ".", "."],
//   ["#", "#", "#", "#"],
//   [".", ".", ".", "."],
// ]);
FindValue([
  ["#", "#", "[#]", "#"],
  [".", ".", "#", "."],
  ["#", "#", "#", "#"],
  [".", ".", ".", "."],
]);
