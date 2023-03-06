var shuffle = function (nums, n) {
  let newArray = [];
  for (let i = 0; i < n; i++) {
    newArray.push(nums[i], nums[i + n]);
  }
  return newArray;
};
shuffle([2, 5, 1, 3, 4, 7], 3);
shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4);
shuffle([1, 1, 2, 2], 2);
