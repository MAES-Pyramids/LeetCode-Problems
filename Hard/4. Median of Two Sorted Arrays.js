var findMedianSortedArrays = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  let k = 0;

  let arr = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      arr[k] = nums1[i];
      i++;
    } else {
      arr[k] = nums2[j];
      j++;
    }
    k++;
  }

  // Copy remaining elements  of nums1[] if any
  while (i < nums1.length) {
    arr[k] = nums1[i];
    i++;
    k++;
  }
  // Copy remaining elements of nums2[] if any
  while (j < nums2.length) {
    arr[k] = nums2[j];
    j++;
    k++;
  }
  let midIndex = Math.floor((arr.length - 1) / 2);
  let midian;
  if (arr.length % 2 == 0) {
    midian = (arr[midIndex] + arr[midIndex + 1]) / 2;
  } else {
    midian = arr[midIndex];
  }

  return midian;
};
console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
