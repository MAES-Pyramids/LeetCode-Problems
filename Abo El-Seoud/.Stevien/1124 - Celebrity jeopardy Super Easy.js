//------------------------------------------------------------------------- First Approach
let TEX = function (input) {
  let start = true;
  input = input.split("");
  for (let char in input) {
    if (input[char] == '"' && start) {
      input.splice(char, 1, "``");
      start = false;
    } else if (input[char] == '"' && !start) {
      input.splice(char, 1, "''");
      start = true;
    }
  }
  console.log(input.join(""));
};
//------------------------------------------------------------------------- Second Approach
// let TEX = function (input) {
//   let start = true;
//   input = input.split("");
//   for (let char in input) {
//     if (input[char] == '"' && start) {
//       process.stdout.write("``");
//       start = false;
//     } else if (input[char] == '"' && !start) {
//       process.stdout.write("''");
//       start = true;
//     } else {
//       process.stdout.write(input[char]);
//     }
//   }
// };
//------------------------------------------------------------------------- Test Cases
TEX(`"To be or not to be," quoth the Bard, "that
is the question"`);
TEX(
  `The programming contestant replied: "I must disagree.To \`C' or not to \`C', that is The Question!"`
);
