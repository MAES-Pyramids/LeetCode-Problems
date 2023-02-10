var plusOne = function (digits) {
  let integer = BigInt(digits.join(""));
  integer++;
  return integer.toString().split("");
};
console.log(plusOne([1, 2, 3]));
