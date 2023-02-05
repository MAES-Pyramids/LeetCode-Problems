var removeDuplicates = function (nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  let expectedNums = nums;
  return expectedNums.length;
};
console.log(removeDuplicates([1, 1, 2]));

//-------------------------------------------
// const removeDuplicates = (nums) => {
//   let expectedNums = [...new Set(nums)];
//   console.log(expectedNums);
//   return expectedNums.length;
// };
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
