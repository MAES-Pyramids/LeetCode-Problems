//------------------------------------------------------------------------- First Approach
function main(input) {
  let lines = input.split(" ");
  let [a, b, c, d] = lines;
  if (a == 0 && b == 0 && c == 0 && d == 0) return 0;
  let [sum, clockWise] = [0, false];
  for (let i = 1; i < lines.length; i++) {
    const angle =
      (1 - Math.abs(Number(lines[i - 1]) / 40 - Number(lines[i]) / 40)) * 360;
    if (!clockWise) {
      sum += angle + 360;
      clockWise = true;
    } else if (clockWise) {
      sum += angle + 360;
      clockWise = false;
    }
  }
  return sum;
}
//------------------------------------------------------------------------- Test Cases
console.log(main(`0 30 0 30`)); // 1350
console.log(main(`5 35 5 35`)); // 1350
console.log(main(`0 20 0 20`)); // 1620
console.log(main(`7 27 7 27`)); // 1620
console.log(main(`0 10 0 10`)); // 1890
console.log(main(`9 19 9 19`)); // 1890
console.log(main(`0 0 0 0`)); // 0
