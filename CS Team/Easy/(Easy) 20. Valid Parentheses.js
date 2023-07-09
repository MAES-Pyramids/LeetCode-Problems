var isValid = function (s) {
  let myDictionary = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let inputArray = s.split("");
  let testQueue = [];
  inputArray.forEach((element) => {
    if (myDictionary[element] != undefined) {
      testQueue.push(element);
    } else if (myDictionary[testQueue[testQueue.length - 1]] != element) {
      testQueue.push("?");
    } else {
      testQueue.pop();
    }
  });
  return testQueue.length == 0;
};

console.log(isValid(""));
