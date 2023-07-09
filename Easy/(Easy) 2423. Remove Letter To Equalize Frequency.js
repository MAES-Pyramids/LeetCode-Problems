//--------------------------------------------------------------Solution One--------------------------------------------------------------//

// var equalFrequency = function (word) {
//   let myMap = new Map();
//   for (let letter of word) {
//     if (myMap.has(letter)) {
//       myMap.set(letter, myMap.get(letter) + 1);
//     } else {
//       myMap.set(letter, 1);
//     }
//   }
//   let Array = [...myMap.values()].sort((a, b) => b - a);
//   let [result, differenceIndexAtSum1, differenceIndexAtSum2, sum] = [
//     true,
//     0,
//     0,
//     0,
//   ];

//   for (let i = 1; i < Array.length; i++) {
//     let deference = Math.abs(Array[i] - Array[i - 1]);
//     sum += deference;
//     if (sum == 1 && deference == 1) differenceIndexAtSum1 = i;
//     if (deference > 1) {
//       differenceIndexAtSum2 = i;
//       break;
//     }
//   }
//   if (Array.length == 1) return true;

//   if (sum == 0) {
//     result = Array.includes(1) ? true : false;
//   }

//   if (sum == 1) {
//     leftLength = differenceIndexAtSum1;
//     rightLength = Array.length - differenceIndexAtSum1;
//     if (leftLength == 1 && rightLength == 1) return true;
//     if (leftLength < 2) return true;
//     if (rightLength < 2) {
//       result = Array.at(-1) == 1 ? true : false;
//     } else {
//       result = false;
//     }
//   }

//   if (sum > 1) {
//     leftLength = differenceIndexAtSum2;
//     rightLength = Array.length - differenceIndexAtSum2;
//     if (Array.length == 2 && Array.includes(1)) return true;
//     if (leftLength == 1) return false;
//     if (rightLength == 1) {
//       result = Array.at(-1) == 1 ? true : false;
//     } else {
//       result = false;
//     }
//   }

//   return result;
// };

//---------------------------------------------------------Solution1 Refactored---------------------------------------------------------//
// const equalFrequency = (word) => {
//   const frequencyMap = new Map();

//   for (const letter of word) {
//     frequencyMap.set(letter, (frequencyMap.get(letter) || 0) + 1);
//   }

//   const frequencyValues = [...frequencyMap.values()].sort((a, b) => b - a);
//   let result = true;
//   let differenceIndexAtSum1 = 0;
//   let differenceIndexAtSum2 = 0;
//   let sum = 0;

//   for (let i = 1; i < frequencyValues.length; i++) {
//     const difference = Math.abs(frequencyValues[i] - frequencyValues[i - 1]);
//     sum += difference;

//     if (sum === 1 && difference === 1) {
//       differenceIndexAtSum1 = i;
//     }

//     if (difference > 1) {
//       differenceIndexAtSum2 = i;
//       break;
//     }
//   }

//   if (frequencyValues.length === 1) {
//     return true;
//   }

//   if (sum === 0) {
//     result = frequencyValues.includes(1);
//   }

//   if (sum === 1) {
//     const leftLength = differenceIndexAtSum1;
//     const rightLength = frequencyValues.length - differenceIndexAtSum1;

//     if (leftLength === 1 && rightLength === 1) {
//       return true;
//     }

//     if (leftLength < 2) {
//       return true;
//     }

//     if (rightLength < 2) {
//       result = frequencyValues.at(-1) === 1;
//     } else {
//       result = false;
//     }
//   }

//   if (sum > 1) {
//     const leftLength = differenceIndexAtSum2;
//     const rightLength = frequencyValues.length - differenceIndexAtSum2;

//     if (frequencyValues.length === 2 && frequencyValues.includes(1)) {
//       return true;
//     }

//     if (leftLength === 1) {
//       return false;
//     }

//     if (rightLength === 1) {
//       result = frequencyValues.at(-1) === 1;
//     } else {
//       result = false;
//     }
//   }

//   return result;
// };
//--------------------------------------------------------------Solution Two--------------------------------------------------------------//
var equalFrequency = function (word) {
  let myMap = new Map();
  for (let letter of word) {
    if (myMap.has(letter)) {
      myMap.set(letter, myMap.get(letter) + 1);
    } else {
      myMap.set(letter, 1);
    }
  }

  let Array = [...myMap.values()].sort((a, b) => b - a);
  let found = false;

  for (let i = 0; i < Array.length; i++) {
    let checkerArray = [...Array];

    if (Array[i] == 1) {
      checkerArray.splice(i, 1);
      if (checkerArray.every((v) => v === checkerArray[0])) {
        found = true;
        break;
      }
      i++;
    }
    if (Array[i] != 1) {
      checkerArray[i] = Array[i] - 1;
      if (checkerArray.every((v) => v === checkerArray[0])) {
        found = true;
        break;
      }
    }
  }
  return found;
};

console.log(equalFrequency("abcc")); // true
console.log(equalFrequency("aazz")); // false
console.log(equalFrequency("bbac")); // true
console.log(equalFrequency("cbbd")); // true
console.log(equalFrequency("cccd")); // true @
console.log(equalFrequency("acbda")); // true
console.log(equalFrequency("cccaa")); // true
console.log(equalFrequency("abbcc")); // true @
console.log(equalFrequency("babbdd")); // false
console.log(equalFrequency("ddaccb")); // false
console.log(equalFrequency("abbbccc")); // true @
console.log(equalFrequency("abcdefg")); // true
console.log(equalFrequency("abbbccccc")); // false
console.log(equalFrequency("aaaabbbbccc")); // false
console.log(
  equalFrequency("abcdefghijklmnopqrstuvwxyznabcdefghijklmnopqrstuvwxyz")
); // true
