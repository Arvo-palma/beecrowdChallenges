var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const PI = 3.14159;
const R = parseFloat(lines[0]);

const VOLUME = (4/3.0) * PI * Math.pow(R, 3);

console.log(`VOLUME = ${VOLUME.toFixed(3)}`);
