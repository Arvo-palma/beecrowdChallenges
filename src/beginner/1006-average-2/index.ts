const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const lines = input.split("\n");
  const values = lines.map((line) => parseFloat(line));
  return values;
};

export const resolution = (input: string) => {
  const [A, B, C] = prepareInput(input);
  const MEDIA = (A * 2 + B * 3 + C * 5) / 10;

  return `MEDIA = ${MEDIA.toFixed(1)}`;
};

console.log(resolution(input));
