//------------------------------------------------------------------------- First Approach
function main(string) {
  if (string.length == 5) return 3;
  let array = string.split("");
  for (let i = 0; i < array.length; i++) {
    let testArray = [...array];
    if (i == 0) {
      testArray[i] = "T";
      if (testArray.join("") == "TWO") return 2;
    }
    if (i == 1) {
      testArray[i] = "W";
      if (testArray.join("") == "TWO") return 2;
    }
    if (i == 2) {
      testArray[i] = "O";
      if (testArray.join("") == "TWO") return 2;
    }
  }
  return 1;
}
//------------------------------------------------------------------------- Test Cases
console.log(main("ZWO"));
console.log(main("TOO"));
console.log(main("OWE"));
