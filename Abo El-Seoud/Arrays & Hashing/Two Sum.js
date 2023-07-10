var twoSum = function (array, target) {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    let complement = target - array[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    } else {
      map.set(array[i], i);
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
