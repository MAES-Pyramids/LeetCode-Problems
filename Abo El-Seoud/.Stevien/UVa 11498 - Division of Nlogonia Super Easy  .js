//------------------------------------------------------------------------- First Approach
function main(center, points) {
  for (let point in points) {
    if (points[point][0] == center[0] || points[point][1] == center[1]) {
      console.log("divisa");
    }
    if (points[point][0] > center[0] && points[point][1] > center[1]) {
      console.log("NE");
    }
    if (points[point][0] < center[0] && points[point][1] > center[1]) {
      console.log("NO");
    }
    if (points[point][0] > center[0] && points[point][1] < center[1]) {
      console.log("SE");
    }
    if (points[point][0] < center[0] && points[point][1] < center[1]) {
      console.log("SO");
    }
  }
}
//------------------------------------------------------------------------- Test Cases
main(
  [2, 1],
  [
    [10, 10],
    [-10, 1],
    [0, 33],
  ]
);

main(
  [-1000, -1000],
  [
    [-1000, -1000],
    [0, 0],
    [-2000, -10000],
    [-999, -1001],
  ]
);
