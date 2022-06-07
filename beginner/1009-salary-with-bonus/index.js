var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const resolution = (lines) => {
  const [_firstName, salary, sold] = lines.map(line => parseFloat(line));
  const TOTAL = salary + (sold * 0.15);

  return `TOTAL = R$ ${TOTAL.toFixed(2)}`
}

console.log(resolution(lines));
