var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const hours = parseInt(lines[0]);
const avgSpeed = parseInt(lines[1]);

const distance = avgSpeed * hours;

const consumption = 12;

const litters = distance / consumption;

console.log(litters.toFixed(3));
