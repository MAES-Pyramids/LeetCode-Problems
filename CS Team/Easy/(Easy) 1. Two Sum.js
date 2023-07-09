//Solution 1
var twoSum = function (array, target) {
  //solution 1
  // const resultIndex = [];
  // array.map((value, index) => {
  //   if (array.indexOf(target - value) !== -1) {
  //     resultIndex.push([index, array.indexOf(target - value)]);
  //   }
  // });
  // const uniqueResultsIndex = resultIndex
  //   .map((nestedArrays) => nestedArrays.sort((a, b) => a - b))
  //   .filter(((t = {}), (arr) => !(t[arr] = arr in t) && arr[0] !== arr[1]))
  //   .flat();
  // return uniqueResultsIndex;

  //More time optimization
  let Storage = {};
  let resultIndex = [];
  for (let i = 0; i < array.length; i++) {
    if (Storage[target - array[i]] != undefined) {
      resultIndex.push([Storage[target - array[i]], i]);
    }
    Storage[array[i]] = i;
  }
  let uniqueResultsIndex = resultIndex
    .map((nestedArrays) => nestedArrays.sort((a, b) => a - b))
    .filter(((t = {}), (arr) => !(t[arr] = arr in t) && arr[0] !== arr[1]))
    .flat();
  return uniqueResultsIndex;

  //---------------------------------------------------------------------------------
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
console.log(twoSum([2, 7, 11, 15], 9));
//--------------------------------------------------------------------------------
