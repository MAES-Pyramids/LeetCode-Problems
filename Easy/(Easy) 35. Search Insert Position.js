var searchInsert = function (nums, target) {
  let midIndex = Math.floor((nums.length - 1) / 2);

  if (nums.length == 0) {
    return 0;
  }
  if (target == nums[midIndex]) {
    return midIndex;
  }
  if (target < nums[midIndex]) {
    let left = searchInsert(nums.slice(0, midIndex), target);
    return left == -1 ? midIndex : left;
  }
  if (target > nums[midIndex]) {
    let right = searchInsert(nums.slice(midIndex + 1), target);
    return right == -1 ? midIndex + 1 : midIndex + 1 + right;
  }
};

console.log(searchInsert([1, 3, 5, 6], 4));
