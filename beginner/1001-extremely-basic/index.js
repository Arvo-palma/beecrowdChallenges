var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const resolution = (lines) => {
  const [A, B] = lines.map(line => parseInt(line));
  const X = A + B;
  return `X = ${X}`;
}

console.log((resolution(lines)));
