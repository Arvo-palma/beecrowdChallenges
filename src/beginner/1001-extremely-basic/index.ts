const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

export const resolution = (lines: string[]) => {
  const [A, B] = lines.map(line => parseInt(line));
  const X = A + B;
  return `X = ${X}`;
}

console.log((resolution(lines)));
