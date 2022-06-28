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
  for (let num = 1; num <= value; num += 2) {
    console.log(num);
  }
};

resolution(input);
