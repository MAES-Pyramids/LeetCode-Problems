//------------------------------------------------------First Approach (Refused)
var longestConsecutive = function (nums) {
  let sortedArray = nums.sort((a, b) => a - b);
  let duplicated = 0;
  for (let i = 1; i < nums.length; i++) {
    if (sortedArray[i] === sortedArray[i - 1]) duplicated++;
    if (sortedArray[i] - sortedArray[i - 1] > 1) {
      return i;
    }
  }
  return nums.length - duplicated;
};

//------------------------------------------------------Second Approach
//-------------//-------------//-------------Test Cases--------------//--------------//--------------//
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
