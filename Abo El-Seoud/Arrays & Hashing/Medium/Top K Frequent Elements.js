//------------------------------------------------------First Approach
var topKFrequent = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([key]) => key);
};
//-------------//-------------//-------------Test Cases--------------//--------------//--------------//
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([3, 0, 1, 0], 1));
//-------------//-------------//-------------concolusion--------------//--------------//--------------//
// Note:
// 1- when use (a, b) => b[1] - a[1] we consider b and a as two element (which are two sub arrays) and cause b[1] will return the second element in the array which is the value of the key/value array then b - a will sort the array in descending order based on values
// 2- ([key]) => key is similar to (element) => element[0] as it is destructuring the key/value array and taking the first element
