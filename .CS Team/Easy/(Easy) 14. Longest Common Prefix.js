let strs = ["flower", "flower", "flower", "flower"];
let valid = true;
let counter = strs[0].length;
let prefix = "";
let prefixLength = 1;

while (valid && counter > 0) {
  prefix = strs[0].slice(0, prefixLength);
  strs.forEach((item) => {
    if (item == "" || strs.length == 1) {
      valid = false;
    }
    if (item.slice(0, prefix.length) != prefix) {
      prefix = prefix.slice(0, prefixLength - 1);
      valid = false;
    }
  });
  prefixLength += 1;
  counter -= 1;
}

console.log(prefix);
