const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const lines = input.split("\n");
  const values = lines.map((line: string) => parseInt(line));
  return values;
};

const formatAnswer = (count: number) => {
  return `${count} valores pares`;
};

export const resolution = (input: string) => {
  const values = prepareInput(input);
  let count = 0;
  values.forEach((value: number) => {
    if (value % 2 === 0) {
      count += 1;
    }
  });

  return formatAnswer(count);
};

console.log(resolution(input));
