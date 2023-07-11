//------------------------------------------------------First Approach
var productExceptSelf = function (nums) {
  let initialProduct = nums.reduce((acc, cur) => acc * cur);
  let zeroProduct;
  if (initialProduct === 0) {
    let zeroIndex = nums.indexOf(0);
    let zeroFreeArray = nums.filter((num, index) => index !== zeroIndex);
    zeroProduct = zeroFreeArray.reduce((acc, cur) => acc * cur);
    if (zeroProduct == 0) return nums.map((num) => 0);
  }
  if (!zeroProduct) {
    return nums.map((num) => initialProduct / num);
  } else {
    return nums.map((num) => (num === 0 ? zeroProduct : 0));
  }
};
//-------------//-------------//-------------Test Cases--------------//--------------//--------------//
console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([0, 0]));
console.log(productExceptSelf([1, 0]));
//-------------//-------------//-------------concolusion--------------//--------------//--------------//
// Remember to check beauty of the map function and how hot and sexy it appears when we used it with ternary operator
