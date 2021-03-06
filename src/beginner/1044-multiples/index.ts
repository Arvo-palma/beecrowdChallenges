const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  var lines = input.split("\n");
  const values = lines[0].split(" ").map((value) => parseInt(value));
  return values;
};

export const resolution = (input: string) => {
  const values = prepareInput(input);
  const [A, B] = values.sort((a, b) => b - a);
  // Alternative resolutions:
  // const areMultiples = ((A/B) - parseInt(A/B)) === 0;
  // const areMultiples = Number.isInteger(A/B);
  const areMultiples = A % B === 0;
  return areMultiples ? "Sao Multiplos" : "Nao sao Multiplos";
};

console.log(resolution(input));
