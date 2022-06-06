var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const PI = 3.14159;
const R = parseFloat(input);

const resolution = (ray) => {
  const A = PI*(ray*ray);
  return `A=${A.toFixed(4)}`;
}

console.log(resolution(R));
