//------------------------------------------------------First Approach
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   sArray = s.split("").sort();
//   tArray = t.split("").sort();
//   return sArray.every((element, index) => {
//     return element === tArray[index];
//   });
// };

//------------------------------------------------------Second Approach
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   let Counter = {};
//   for (let i = 0; i < s.length; i++) {
//     Counter[s[i]] = (Counter[s[i]] || 0) + 1;
//     Counter[t[i]] = (Counter[t[i]] || 0) - 1;
//   }
//   return Object.values(Counter).every((element) => element === 0);
// };

//------------------------------------------------------Third Approach
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const counter = new Map();

  for (let i = 0; i < s.length; i++) {
    counter.set(s[i], (counter.get(s[i]) || 0) + 1);
    counter.set(t[i], (counter.get(t[i]) || 0) - 1);
  }

  return [...counter.values()].every((element) => element === 0);
};
//-------------//-------------//-------------Test Cases--------------//--------------//--------------//
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

//-------------//-------------//-------------concolusion--------------//--------------//--------------//
// We can conclude that always try to use map instead of object, because it is faster and more efficient. even it may cost more space as the map is more complicated inside  but it is worth it.
