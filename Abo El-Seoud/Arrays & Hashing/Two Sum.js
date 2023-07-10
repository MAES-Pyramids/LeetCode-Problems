//------------------------------------------------------First Approach
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

//------------------------------------------------------Second Approach
var twoSum = function (array, target) {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    let complement = target - array[i];
    if (map.has(array[i])) {
      return [map.get(array[i]), i];
    } else {
      map.set(complement, i);
    }
  }
};

//-------------//-------------//-------------Test Cases--------------//--------------//--------------//
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

//-------------//-------------//-------------concolusion--------------//--------------//--------------//

// The second approach, which involves storing the complement along with the index of the corresponding element, is superior to storing the element itself with its index and then checking if the complement required is one of the stored elements.

// So the second approach is more efficient because it consumes less memory and requires almost less time for execution.
