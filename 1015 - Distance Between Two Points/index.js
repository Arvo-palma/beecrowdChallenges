var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line1 = lines[0].split(' ');
const line2 = lines[1].split(' ');

const x1 = parseFloat(line1[0]);
const y1 = parseFloat(line1[1]);
const x2 = parseFloat(line2[0]);
const y2 = parseFloat(line2[1]);

const distance = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));

console.log(distance.toFixed(4));
