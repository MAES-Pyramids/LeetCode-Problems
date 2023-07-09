// My first failed attempt:

// var removeDuplicates = function (nums) {
//   let unique_arr = [...new Set(nums)];
//   let general_arr = nums.join("");
//   for (let i = 0; i < unique_arr.length; i++) {
//     var myRegex = new RegExp("(" + unique_arr[i] + "){3,}", "g");
//     if (myRegex.test(general_arr)) {
//       general_arr = general_arr.replace(
//         myRegex,
//         `${unique_arr[i]}${unique_arr[i]}`
//       );
//     }
//   }
//   general_arr = general_arr.split("");
//   for (let i = 0; i < nums.length; i++) {
//     if (general_arr[i] == "-") {
//       general_arr.shift(i);
//       nums[i] = `-${general_arr[i]}`;
//     } else {
//       nums[i] = general_arr[i];
//     }
//   }
//   return general_arr.length;
// };

//----------------------------------------------

// My second  attempt:
var removeDuplicates = function (nums) {};
//------------------Test Cases------------------
// console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); //5      [ '1', '1', '2', '2', '3', undefined ]
// console.log(removeDuplicates([-1, 0, 0, 0, 0, 3, 3])); //5  [ '-1', '0', '0', '3', '3', undefined, undefined ]
// console.log(removeDuplicates([-3, -1, 0, 0, 0, 3, 3])); //6 [ '-3', '-1', '0', '0', '3', '3', undefined ]
console.log(
  removeDuplicates([
    -50, -50, -49, -48, -47, -47, -47, -46, -45, -43, -42, -41, -40, -40, -40,
    -40, -40, -40, -39, -38, -38, -38, -38, -37, -36, -35, -34, -34, -34, -33,
    -32, -31, -30, -28, -27, -26, -26, -26, -25, -25, -24, -24, -24, -22, -22,
    -21, -21, -21, -21, -21, -20, -19, -18, -18, -18, -17, -17, -17, -17, -17,
    -16, -16, -15, -14, -14, -14, -13, -13, -12, -12, -10, -10, -9, -8, -8, -7,
    -7, -6, -5, -4, -4, -4, -3, -1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 9, 10,
    10, 10, 11, 11, 12, 12, 13, 13, 13, 14, 14, 14, 15, 16, 17, 17, 18, 20, 21,
    22, 22, 22, 23, 23, 25, 26, 28, 29, 29, 29, 30, 31, 31, 32, 33, 34, 34, 34,
    36, 36, 37, 37, 38, 38, 38, 39, 40, 40, 40, 41, 42, 42, 43, 43, 44, 44, 45,
    45, 45, 46, 47, 47, 47, 47, 48, 49, 49, 49, 50,
  ])
);
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 3, 3]));
