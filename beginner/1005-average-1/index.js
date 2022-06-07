var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const resolution = (lines) => {
  const [A, B] = lines.map(line => parseFloat(line));
  const MEDIA = ((A*3.5) + (B*7.5))/11;

  return `MEDIA = ${MEDIA.toFixed(5)}`
}

console.log(resolution(lines));
