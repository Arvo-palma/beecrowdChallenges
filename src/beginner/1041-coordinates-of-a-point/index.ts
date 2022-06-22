const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const getCoords = (input: string) => {
  const [x, y] = input.split(" ").map((point) => parseFloat(point));
  return [x, y];
};

export const resolution = (input: string) => {
  const [x, y] = getCoords(input);

  if (x === 0.0 && y === 0.0) {
    return "Origem";
  } else if (x === 0.0) {
    return "Eixo Y";
  } else if (y === 0.0) {
    return "Eixo X";
  } else if (x > 0.0 && y > 0.0) {
    return "Q1";
  } else if (x < 0.0 && y > 0.0) {
    return "Q2";
  } else if (x < 0.0 && y < 0.0) {
    return "Q3";
  } else if (x > 0.0 && y < 0.0) {
    return "Q4";
  }
};

console.log(resolution(input));
