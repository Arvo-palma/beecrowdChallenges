var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const resolution = (lines) => {
  const [A, B, C, D] = lines.map(line => parseInt(line));
  const DIFERENCA = (A * B - C * D);

  return `DIFERENCA = ${DIFERENCA}`;
};

console.log(resolution(lines));
