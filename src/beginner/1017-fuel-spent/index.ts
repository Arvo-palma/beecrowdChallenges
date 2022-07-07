const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const lines = input.split("\n");
  const values = lines.map((value) => parseInt(value));
  return values;
};

export const resolution = (input: string) => {
  const [hours, avgSpeed] = prepareInput(input);

  const litters = (avgSpeed * hours) / 12;

  return litters.toFixed(3);
};

console.log(resolution(input));
