var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const resolution = (lines) => {
  const [A, B] = lines.map((line) => parseInt(line));

  return `PROD = ${A * B}`;
};

console.log(resolution(lines));
