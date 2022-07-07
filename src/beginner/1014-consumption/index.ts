const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const lines = input.split("\n");
  return lines;
};

export const resolution = (input: string) => {
  const lines = prepareInput(input);
  const consumption = parseInt(lines[0]) / parseFloat(lines[1]);
  return `${consumption.toFixed(3)} km/l`;
};

console.log(resolution(input));
