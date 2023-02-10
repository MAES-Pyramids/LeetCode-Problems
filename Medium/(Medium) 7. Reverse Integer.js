var reverse = function (x) {
  let string = x.toString();
  let array = string.split("").reverse();
  if (array[array.length - 1] == "-") {
    array.unshift(array.pop());
    var result = BigInt(array.join(""));
  } else {
    var result = BigInt(array.join(""));
  }

  if (result > Math.pow(-2, 31) && result < Math.pow(2, 31) - 1) {
    return result;
  } else {
    return 0;
  }
};

console.log(reverse(1534236469));
