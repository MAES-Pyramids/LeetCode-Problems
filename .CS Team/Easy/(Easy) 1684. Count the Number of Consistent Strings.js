// My own solution

// var countConsistentStrings = function (allowed, words, count = 0) {
//   let allowRegex = new RegExp(
//     `${allowed
//       .split("")
//       .map((e) => `${e}*`)
//       .join("")}`,
//     "g"
//   );
//   words.forEach((element) => {
//     let matchedElement = element.match(allowRegex).join("");
//     if (element == matchedElement) count++;
//   });
//   return count;
// };

// Optimization based on Ghat Gpt Suggestions
function countConsistentStrings(allowed, words) {
  let count = 0;
  const regex = new RegExp(`^[${allowed}]+$`);
  // The ^ character matches the start of the string, and $ character matches the end of the string. When used together, they ensure that the regular expression matches the entire string, from start to end, without any characters in between.
  words.forEach((word) => {
    if (regex.test(word)) {
      count++;
    }
  });

  return count;
}
//---------------------Test Cases---------------------
console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
console.log(
  countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
);
console.log(
  countConsistentStrings("cad", [
    "cc",
    "acd",
    "b",
    "ba",
    "bac",
    "bad",
    "ac",
    "d",
  ])
);
