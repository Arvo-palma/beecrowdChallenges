const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const lines = input.split("\n");
  const values = lines.map((value) => parseFloat(value));
  return values;
};

const formatAnswer = (total: number) => {
  return `${total} valores positivos`;
};

export const resolution = (input: string) => {
  const values = prepareInput(input);
  let total = 0;
  values.forEach((value) => {
    if (value > 0) total += 1;
  });

  return formatAnswer(total);
};

console.log(resolution(input));
