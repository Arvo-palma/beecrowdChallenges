const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  var lines = input.split("\n");
  const values = lines[0].split(" ").map((value: string) => parseFloat(value));

  return values;
};

export const resolution = (input: string) => {
  const values = prepareInput(input);
  const [b1, b2, h] = values;
  const [A, B, C] = values.sort((a, b) => {
    return a - b;
  });
  const exists = A + B > C;
  return exists
    ? `Perimetro = ${(A + B + C).toFixed(1)}`
    : `Area = ${(((b1 + b2) * h) / 2).toFixed(1)}`;
};

console.log(resolution(input));
