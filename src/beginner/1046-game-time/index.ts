const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const formatAnswer = (count: number) => {
  return `O JOGO DUROU ${count} HORA(S)`;
};

const prepareInput = (input: string) => {
  const lines = input.split("\n");
  const stringValues = lines[0].split(" ");
  const [start, end] = stringValues.map((value) => parseInt(value));

  return [start, end];
};

export const resolution = (input: string) => {
  const [start, end] = prepareInput(input);
  if (start === end) return formatAnswer(24);
  if (end - start < 0) return formatAnswer(end + 24 - start);
  if (end - start > 0) return formatAnswer(end - start);
};

console.log(resolution(input));
