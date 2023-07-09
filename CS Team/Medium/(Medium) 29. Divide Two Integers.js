// function range(result, isNegative) {
//   if (result >= -2147483648 && result <= 2147483647) {
//     return result;
//   } else {
//     return isNegative ? -2147483648 : 2147483647;
//   }
// }

// var divide = function (dividend, divisor) {
//   let isNegative =
//     (dividend < 0 && divisor > 0) || (divisor < 0 && dividend > 0)
//       ? true
//       : false;
//   (dividend = Math.abs(dividend)), (divisor = Math.abs(divisor));

//   let result = 0;
//   if (dividend == divisor) return isNegative ? -1 : 1;
//   if (divisor == 1 && isNegative) {
//     return range(-dividend, isNegative);
//   }
//   if (divisor == 1 && !isNegative) {
//     return range(dividend, isNegative);
//   }
//   while (dividend >= divisor) {
//     dividend -= divisor;
//     result++;
//   }
//   result = isNegative ? -result : result;
//   return range(result, isNegative);
// };

// --------------------------------------------------------------After refactoring
function range(result, isNegative) {
  const MIN_INT = -2147483648;
  const MAX_INT = 2147483647;
  if (result >= MIN_INT && result <= MAX_INT) {
    return result;
  }
  return isNegative ? MIN_INT : MAX_INT;
}

const divide = function (dividend, divisor) {
  const isNegative = dividend < 0 !== divisor < 0;
  let [absDividend, absDivisor] = [Math.abs(dividend), Math.abs(divisor)];
  let result = 0;
  if (absDividend === absDivisor) {
    return isNegative ? -1 : 1;
  }
  if (absDivisor === 1) {
    return range(isNegative ? -absDividend : absDividend, isNegative);
  }
  while (absDividend >= absDivisor) {
    absDividend -= absDivisor;
    result++;
  }
  return range(isNegative ? -result : result, isNegative);
};

console.log(divide(10, 3));
console.log(divide(7, -3));
console.log(divide(1, 1));
console.log(divide(-2147483648, -1));
console.log(divide(-2147483648, -2));
console.log(divide(-2147483648, 2));
