//------------------------------------------------------First Approach
// var groupAnagrams = function (strs) {
//   if (strs.length <= 1) return [strs];
//   let set = new Set();
//   let result = [];
//   for (let i = 0; i < strs.length; i++) {
//     if (result.includes(i)) continue;
//     result = [i];
//     for (let j = i + 1; j < strs.length; j++) {
//       let [s, t] = [strs[i], strs[j]];
//       if (s.length !== t.length) continue;

//       const counter = new Map();
//       for (let i = 0; i < s.length; i++) {
//         counter.set(s[i], (counter.get(s[i]) || 0) + 1);
//         counter.set(t[i], (counter.get(t[i]) || 0) - 1);
//       }

//       if ([...counter.values()].every((element) => element === 0)) {
//         result = [...result, j];
//       }
//     }
//     set.add(result.sort());
//   }
//   const newArray = [...set].filter((subArray, index) => {
//     const previousArrays = [...set].slice(0, index);
//     const flattenedPreviousArrays = previousArrays.flat();
//     return !flattenedPreviousArrays.includes(subArray[0]);
//   });

//   let output = [];
//   for (group of newArray) {
//     output.push(group.map((element) => strs[element]));
//   }

//   return output;
// };

//------------------------------------------------------First Approach Refactored
const groupAnagrams = (strs) => {
  if (strs.length <= 1) return [strs];

  const result = [];
  const set = new Set();

  for (let i = 0; i < strs.length; i++) {
    if (result.includes(i)) continue;

    const group = [i];

    for (let j = i + 1; j < strs.length; j++) {
      const [s, t] = [strs[i], strs[j]];

      if (s.length !== t.length) continue;

      const counter = new Map();

      for (let k = 0; k < s.length; k++) {
        counter.set(s[k], (counter.get(s[k]) || 0) + 1);
        counter.set(t[k], (counter.get(t[k]) || 0) - 1);
      }

      if ([...counter.values()].every((element) => element === 0)) {
        group.push(j);
      }
    }

    result.push(group);
    set.add(group.sort());
  }

  const newArray = [...set].filter((subArray, index) => {
    const previousArrays = [...set].slice(0, index);
    const flattenedPreviousArrays = previousArrays.flat();
    return !flattenedPreviousArrays.includes(subArray[0]);
  });

  const output = newArray.map((group) => group.map((element) => strs[element]));

  return output;
};

//-------------//-------------//-------------Test Cases--------------//--------------//--------------//
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams([""]));
// console.log(groupAnagrams(["a"]));
