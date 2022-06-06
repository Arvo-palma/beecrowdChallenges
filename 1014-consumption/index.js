var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const resolution = (lines) => {
  const consumption = parseInt(lines[0]) / parseFloat(lines[1]);
  return `${consumption.toFixed(3)} km/l`
};

console.log(resolution(lines));
