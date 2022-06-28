const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const lines = input.split("\n");
  const values = lines.map((line: string) => parseInt(line));

  return values;
};

export const resolution = (input: string) => {
  const [X, Y] = prepareInput(input);
  let sum = 0;
  let startValue;
  let lastValue;
  if (X > Y) {
    startValue = Y + 1;
    lastValue = X;
  } else {
    startValue = X + 1;
    lastValue = Y;
  }
  const firstValue = startValue % 2 === 0 ? startValue + 1 : startValue;
  for (let num = firstValue; num < lastValue; num += 2) {
    sum += num;
  }
  return sum;
};

console.log(resolution(input));
