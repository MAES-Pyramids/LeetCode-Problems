// Version 1.0.0
// var isPalindrome = function (s) {
//   if (s.length == 1) return true;
//   if (s.match(/[^\W_]/g)) {
//     let string = s
//       .match(/[^\W_]/g)
//       .join("")
//       .toLowerCase();
//     let [left, right] = [0, string.length - 1];
//     while (left < right) {
//       if (string[left] != string[right]) return false;
//       left++;
//       right--;
//     }
//     return true;
//   } else return true;
// };
// Version 2.0.0
var isPalindrome = function (s) {
  if (s.length < 2) return true;
  let string = s.match(/[^\W_]/g);
  if (string) {
    string = string.join("").toLowerCase();
    let [left, right] = [0, string.length - 1];
    while (left < right) {
      if (string[left] !== string[right]) return false;
      left++;
      right--;
    }
    return true;
  }
  return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome(".,"));
console.log(isPalindrome("bb"));
console.log(isPalindrome("ab_a"));
