// First solution with focus on time complexity
var reverseWords = function (s) {
  return s.match(/\w+/g).reverse().join(" ");
};
// Second solution with focus on space complexity
var reverseWords = function (s) {
  let matched = s.match(/\w+/g);
  let reversematch = [];
  for (let i = matched.length - 1; i >= 0; i--) {
    reversematch.push(matched[i]);
  }
  return reversematch.join(" ");
};
console.log(reverseWords("  hello world!  "));
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("a good   example"));
console.log(reverseWords("  Bob    Loves  Alice   "));
