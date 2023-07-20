//------------------------------------------------------------------------- First Approach
function main(a, b) {
  if (a > b) return ">";
  else if (a < b) return "<";
  else return "=";
}
//------------------------------------------------------------------------- Test Cases
console.log(main(10, 20));
console.log(main(20, 10));
console.log(main(10, 10));
