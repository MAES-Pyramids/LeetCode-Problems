var romanToInt = function (string) {
  let myDictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let inputArray = string.split("");
  inputArray.forEach((item, index) => {
    if (index != 0) {
      if (inputArray[index - 1] == "I" && (item === "V" || item === "X")) {
        result += myDictionary[item];
        result -= 2 * myDictionary["I"];
      } else if (
        inputArray[index - 1] == "X" &&
        (item === "L" || item === "C")
      ) {
        result += myDictionary[item];
        result -= 2 * myDictionary["X"];
      } else if (
        inputArray[index - 1] == "C" &&
        (item === "D" || item === "M")
      ) {
        result += myDictionary[item];
        result -= 2 * myDictionary["C"];
      } else {
        result += myDictionary[item];
      }
    } else {
      result += myDictionary[item];
    }
  });
  return result;
};

romanToInt("III");
