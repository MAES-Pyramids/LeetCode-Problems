function longestPalindrome(s) {
  const isPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  let longestPalindrome = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j > i; j--) {
      const substring = s.slice(i, j);
      if (
        substring.length > longestPalindrome.length &&
        isPalindrome(substring)
      ) {
        longestPalindrome = substring;
        break;
      }
    }
  }

  return longestPalindrome.length > 0 ? longestPalindrome : s[0];
}

console.log(longestPalindrome("a"));
console.log(longestPalindrome("CCC"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("abcda"));
console.log(longestPalindrome("aacabdkacaa"));
