var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let checker = 0;

  for (let i = 0; i < nums.length; i++) {
    var myRegex = new RegExp("^" + checker + "$", "g");
    if (myRegex.test(nums[i].toString())) {
      checker++;
    } else {
      return checker;
    }
  }
  return nums[0] + nums.length;
};
console.log(missingNumber([3, 0, 1])); //2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); //8
console.log(missingNumber([0, 1])); //2
console.log(missingNumber([0])); //1
console.log(missingNumber([1, 2])); //0
console.log(
  missingNumber([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49,
  ])
); //18
console.log(
  missingNumber([
    19, 28, 36, 12, 5, 39, 47, 42, 38, 45, 16, 9, 22, 1, 48, 13, 23, 10, 25, 44,
    35, 40, 6, 3, 34, 49, 8, 17, 27, 30, 31, 7, 37, 24, 21, 2, 14, 20, 43, 33,
    29, 11, 15, 41, 0, 4, 26, 46, 18,
  ])
); //32
