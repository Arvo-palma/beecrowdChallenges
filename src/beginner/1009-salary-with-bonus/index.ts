const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const lines = input.split("\n");
  const values = lines.map((line) => parseFloat(line));
  return values;
};

export const resolution = (input: string) => {
  const [_firstName, salary, sold] = prepareInput(input);
  const TOTAL = salary + sold * 0.15;

  return `TOTAL = R$ ${TOTAL.toFixed(2)}`;
};

console.log(resolution(input));
