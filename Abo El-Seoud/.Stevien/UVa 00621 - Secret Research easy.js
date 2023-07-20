//------------------------------------------------------------------------- First Approach
function main(number) {
  let string = number.toString();
  if (string.length < 3) {
    if (string == 1 || string == 4 || string == 78) return "+";
  }
  if (string[string.length - 1] == "5" && string[string.length - 2] == "3")
    return "-";
  if (string[0] == "9" && string[string.length - 1] == "4") return "*";
  if (string[0] == "1" && string[1] == "9" && string[2] == "0") return "?";
}
//------------------------------------------------------------------------- Test Cases
console.log(main(78));
console.log(main(7835));
console.log(main(19078));
console.log(main(944));
