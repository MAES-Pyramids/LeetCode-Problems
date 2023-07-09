var merge = function (nums1, m, nums2, n) {
  if (m == 0) {
    nums1.forEach((element, index) => {
      nums1[index] = nums2[index];
    });
  }
  if (m != 0) {
    nums1.splice(m);
    let i = 0;
    let j = 0;
    while (nums2.length > 0) {
      if (nums2[0] >= nums1[nums1.length - 1]) {
        nums1.push(...nums2);
        break;
      } else if (nums2[j] < nums1[i]) {
        nums1.splice(i, 0, nums2[j]);
        nums2.shift();
        i++;
      } else {
        i++;
      }
    }
  }
  return nums1;
};

console.log(merge([0], 0, [1], 1));
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
