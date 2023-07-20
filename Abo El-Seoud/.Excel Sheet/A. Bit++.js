function FindValue(array) {
  let result = 0;
  array.forEach((element) => {
    if (element.includes("++")) {
      result++;
    } else {
      result--;
    }
  });
  console.log(result);
}
FindValue(["X++", "--X"]);
FindValue(["++X"]);
