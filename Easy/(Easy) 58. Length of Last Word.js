// var lengthOfLastWord1 = function (s) {
//   let index = s.indexOf(" ");
//   let lastword = s.slice(index + 1);
//   return lastword.length;
// };
// console.log(lengthOfLastWord1("Hello World"));

// var lengthOfLastWord2 = function (s) {
//   let findex = s.indexOf(" ");
//   let lindex = s.indexOf(s.at(-1));
//   return lindex - findex;
// };
// console.log(lengthOfLastWord2("Hello World"));

//Even if the second function is better in term of space complexity, it is not the best solution and also first one isn't the best solution. cause both of them require that no space are after the last word and also the second one require that the last char in the last word didn't exist at any other place in word
//--------------------------------------------------------------
// var lengthOfLastWord = function (s) {
//   let arr = s.split(" ");
//   while (arr.at(-1).length == 0) {
//     arr.pop();
//   }
//   return arr.at(-1).length;
// };
// console.log(lengthOfLastWord("   fly me   to   the moon  "));

// Note: we can use filter() method instead of while loop to remove the empty strings from the array and return new array but it will take more space complexity even it's same in term of time complexity
//--------------------------------------------------------------
var lengthOfLastWord = function (s) {
  return s.match(/\w+/g).at(-1).length;
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));
