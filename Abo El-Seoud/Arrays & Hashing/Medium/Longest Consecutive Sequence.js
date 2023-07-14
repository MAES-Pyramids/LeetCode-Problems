//------------------------------------------------------First Approach (Refused)
// var longestConsecutive = function (nums) {
//   let sortedArray = nums.sort((a, b) => a - b);
//   let duplicated = 0;
//   for (let i = 1; i < nums.length; i++) {
//     if (sortedArray[i] === sortedArray[i - 1]) duplicated++;
//     if (sortedArray[i] - sortedArray[i - 1] > 1) {
//       return i;
//     }
//   }
//   return nums.length - duplicated;
// };

//------------------------------------------------------Second Approach
// var longestConsecutive = function (nums) {
//   let sortedArray = nums.sort((a, b) => a - b);
//   if (nums.length == 0) return 0;
//   let array = [];
//   let sum = 1;

//   for (let i = 1; i < nums.length; i++) {
//     if (sortedArray[i] == sortedArray[i - 1]) continue;

//     if (Math.abs(sortedArray[i] - sortedArray[i - 1]) == 1) {
//       sum++;
//     } else {
//       array.push(sum);
//       sum = 1;
//     }
//   }
//   array.push(sum);
//   return Math.max(...array);
// };
//------------------------------------------------------Refactoring Third Approach
var longestConsecutive = function (nums) {
  if (nums.length == 0) return 0;
  let sortedArray = nums.sort((a, b) => a - b);
  let [maxConsecutive, currentConsecutive] = [1, 1];

  for (let i = 1; i < nums.length; i++) {
    if (sortedArray[i] == sortedArray[i - 1]) continue;

    if (Math.abs(sortedArray[i] - sortedArray[i - 1]) == 1) {
      currentConsecutive++;
    } else {
      maxConsecutive = Math.max(maxConsecutive, currentConsecutive);
      currentConsecutive = 1;
    }
  }
  return Math.max(maxConsecutive, currentConsecutive);
};
//-------------//-------------//-------------Test Cases--------------//--------------//--------------//
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
// console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])); // 7
