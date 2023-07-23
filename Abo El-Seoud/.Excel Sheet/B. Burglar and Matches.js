const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getInputAsync = async () => {
  return new Promise((resolve) => {
    rl.question("", (line) => {
      resolve(line);
    });
  });
};

const readVectors = async () => {
  let matchboxesArray = []; // Use an array to store objects with key-value pairs
  let [requiredMatches, numberOFmatchboxes] = await getInputAsync().then(
    (line) => line.split(" ").map((val) => parseInt(val))
  );

  for (let i = 0; i < numberOFmatchboxes; i++) {
    const line = await getInputAsync();
    let [key, value] = line.split(" ").map((val) => parseInt(val));
    matchboxesArray.push({ key, value }); // Add an object to the array with key-value pairs
  }

  FindMaxNumberOfMatches(requiredMatches, matchboxesArray);
  rl.close();
};

readVectors();

//--------------------------------------------------------
function FindMaxNumberOfMatches(maxNumberOfMatches, matchboxesArray) {
  let sortedMatchboxesArray = matchboxesArray.sort((a, b) => b.value - a.value);

  let sum = 0;
  for (const matchbox of sortedMatchboxesArray) {
    const { key, value } = matchbox;
    if (maxNumberOfMatches > 0) {
      if (key >= maxNumberOfMatches) {
        sum += maxNumberOfMatches * value;
        maxNumberOfMatches = 0;
      } else {
        sum += key * value;
        maxNumberOfMatches -= key;
      }
    }
  }
  console.log(sum);
}
//--------------------------------------------------------
// One of the problem when dealing with map is that i will not allow us to have two values with two keys if the keys are the same
