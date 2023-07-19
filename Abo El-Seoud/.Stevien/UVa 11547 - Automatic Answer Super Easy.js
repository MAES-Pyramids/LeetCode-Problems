//------------------------------------------------------------------------- First Approach
function main(input) {
  return (
    Math.trunc(
      Math.abs((((((input * 567) / 9 + 7492) * 235) / 47 - 498) % 100) / 10)
    ) || 0
  );
}
//------------------------------------------------------------------------- Test Cases
console.log(main(-120));
console.log(main(637));
console.log(main(1));
