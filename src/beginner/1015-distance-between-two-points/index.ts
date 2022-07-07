const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const lines = input.split("\n");
  const coordinates = lines.map((line) => line.split(" "));
  return coordinates;
};

export const resolution = (input: string) => {
  const coordinates = prepareInput(input);
  const [p1, p2] = coordinates;
  const [x1, y1] = p1.map((coord) => parseFloat(coord));
  const [x2, y2] = p2.map((coord) => parseFloat(coord));
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  return distance.toFixed(4);
};

console.log(resolution(input));
