//First Successful Submission
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

//Second UNSuccessful Submission
// var strStr = function (haystack, needle) {
//   let [i, j, count, storedIND, oneBelow] = [0, 0, 0, 0, 0];
//   while (i < haystack.length && j < needle.length) {
//     if (haystack[i] == needle[j]) {
//       count++, i++, j++;
//       if (haystack[i] == needle[0] && count != 0) {
//         storedIND = i;
//       }
//     } else {
//       if (haystack.length - storedIND >= needle.length) {
//         storedIND == 0 ? i++ : (i = storedIND);
//         storedIND = 0;
//       } else if (haystack.length - storedIND < needle.length && oneBelow == 0) {
//         i = storedIND - 1;
//         oneBelow = 1;
//       } else {
//         break;
//       }
//       count = 0;
//       j = 0;
//     }
//     if (count == needle.length) {
//       return i - needle.length;
//     }
//   }
//   return -1;
// };

//cases where both first and second submissions succeeded to pass
console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("mississippi", "pi"));
console.log(strStr("mississippi", "issip"));
console.log(strStr("mississippi", "issipi"));
console.log(strStr("mississippi", "issippi"));
console.log(strStr("mississippi", "sippj"));
console.log(strStr("mississippi", "sipp"));
console.log(strStr("aabaaabaaac", "aabaaac"));
//cases where second submission failed to pass
console.log(strStr("babbbbbabb", "bbab"));
