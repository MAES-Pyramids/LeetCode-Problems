//------------------------------------------------------------------------- First Approach
function main(a, points) {
  points.sort((a, b) => a - b);
  if (points.length === 1) return 0;
  if (points.length === a) return 2 * (points.at(-1) - points[0]);
  return 2 * (points.at(a - 1) - points[0]);
}
//------------------------------------------------------------------------- Test Cases
console.log(main(4, [24, 13, 89, 37]));
console.log(main(6, [7, 30, 41, 14, 39, 42]));
