var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const resolution = (lines) => {
  const [hours, avgSpeed] = lines.map(value => parseInt(value));

  const litters = (avgSpeed * hours) / 12;
  
  return litters.toFixed(3);
};

console.log(resolution(lines));
