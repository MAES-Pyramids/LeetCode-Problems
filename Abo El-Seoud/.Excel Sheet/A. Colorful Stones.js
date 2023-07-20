function findPosition(colors, instructions) {
  let position = 1;
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i] === colors[0]) {
      colors = colors.slice(1);
      position++;
    }
  }
  return position;
}
findPosition("RRRBGBRBBB", "BBBRR");
findPosition("RGB", "RRR");
findPosition(
  "BRRBGBRGRBGRGRRGGBGBGBRGBRGRGGGRBRRRBRBBBGRRRGGBBB",
  "BBRBGGRGRGBBBRBGRBRBBBBRBRRRBGBBGBBRRBBGGRBRRBRGRB"
);
