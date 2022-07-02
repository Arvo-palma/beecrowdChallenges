const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const lines = input.split("\n");
  const values = lines.map((line) => parseFloat(line));
  return values;
};

export const resolution = (input: string) => {
  const [A, B] = prepareInput(input);
  const MEDIA = (A * 3.5 + B * 7.5) / 11;

  return `MEDIA = ${MEDIA.toFixed(5)}`;
};

console.log(resolution(input));
