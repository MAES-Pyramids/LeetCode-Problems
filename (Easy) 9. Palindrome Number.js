var isPalindrome = function (x) {
  const reversedNumber = String(x).split("").reverse().join("");
  return x == reversedNumber;
};
console.log(isPalindrome(12321));
