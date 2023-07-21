//-------------------------------------------------------------------First Solution
function LaptopsCompare(input) {
  let map = new Map();
  let maxPrice = 0;
  input.map((item) => {
    if (item[0] > maxPrice) maxPrice = item[0];
    map.set(item[0], item[1]);
  });
  let sortedMap = [...map.entries()].sort((a, b) => b[1] - a[1]);

  if (sortedMap[0][0] === maxPrice) {
    return console.log("Poor Alex");
  }
  return console.log("Happy Alex");
}
//-------------------------------------------------------------------Second Solution
LaptopsCompare([
  [1, 2],
  [2, 1],
]);
