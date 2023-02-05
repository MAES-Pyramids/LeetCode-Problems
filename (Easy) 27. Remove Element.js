var removeElement = function (nums, val) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i--;
    }
  }
  let expectedNums = nums;
  return expectedNums.length;
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
