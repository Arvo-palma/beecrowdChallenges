const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const radius = parseFloat(input);
  return radius;
};

export const resolution = (input: string) => {
  const radius = prepareInput(input);
  const VOLUME = (4 / 3.0) * 3.14159 * Math.pow(radius, 3);
  return `VOLUME = ${VOLUME.toFixed(3)}`;
};

console.log(resolution(input));
