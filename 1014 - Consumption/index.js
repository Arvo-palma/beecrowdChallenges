var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const distance = parseInt(lines[0]);
const gasLiters = parseFloat(lines[1]);

const consumption = distance / gasLiters;

console.log(`${consumption.toFixed(3)} km/l`);
