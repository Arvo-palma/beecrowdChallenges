const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const lines = input.split("\n");
  const value = parseInt(lines[0]);
  return value;
};

export const resolution = (input: string) => {
  const value = prepareInput(input);
  let count = 0;
  const firstValue = value % 2 === 0 ? value + 1 : value;
  for (let num = firstValue; count < 6; num += 2) {
    count += 1;
    console.log(num);
  }
};

resolution(input);
