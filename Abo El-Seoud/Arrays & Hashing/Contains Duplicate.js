//------------------------------------------------------First Approach
// var containsDuplicate = function (nums) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       map.set(nums[i], map.get(nums[i]) + 1);
//     } else {
//       map.set(nums[i], 1);
//     }
//   }
//   return [...map.values()].some((element) => element > 1);
//   // return [...map.values()].filter((element) => element > 1).length > 0;
// };

//------------------------------------------------------Second Approach
var containsDuplicate = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    } else {
      set.add(nums[i]);
    }
  }
  return false;
};
//-------------//-------------//-------------Test Cases--------------//--------------//--------------//
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
