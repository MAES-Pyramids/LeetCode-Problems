//Solution 1
var twoSum = function (array, target) {
  const resultIndex = [];
  array.map((value, index) => {
    if (array.indexOf(target - value) !== -1) {
      resultIndex.push([index, array.indexOf(target - value)]);
    }
  });
  const uniqueResultsIndex = resultIndex
    .map((nestedArrays) => nestedArrays.sort((a, b) => a - b))
    .filter(((t = {}), (arr) => !(t[arr] = arr in t) && arr[0] !== arr[1]))
    .flat();

  return uniqueResultsIndex;

  //solution 2
  // let Storage = {};
  // for (const [index, value] of array.entries()) {
  //   if (Storage[value] == undefined) {
  //     Storage[target - value] = index;
  //   } else {
  //     return [Storage[value], index];
  //   }
  // }
};
console.log(twoSum([3, 2, 4], 6));
//--------------------------------------------------------------------------------
