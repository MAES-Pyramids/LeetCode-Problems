// My own solution

// var containsNearbyDuplicate = function (nums, k) {
//   for (let c = 0; c < nums.length; c++) {
//     let indices = [];
//     let j = c + 1;
//     while (Math.abs(j - c) <= k && j < nums.length) {
//       if (nums[j] == nums[c] && j != c) indices.push(j);
//       j++;
//     }
//     if (indices.length > 0) return true;
//   }
//   return false;
// };

// Chat gpt solution
var containsNearbyDuplicate = function (nums, k) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      set.delete(nums[i - k - 1]);
    }
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
};
//--------------------Test--------------------
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
console.log(containsNearbyDuplicate([4, 1, 2, 3, 1, 5], 3));
console.log(containsNearbyDuplicate([0, 1, 2, 3, 2, 5], 3));
