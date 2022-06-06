var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const firstName = lines[0];
const salary = parseFloat(lines[1]);
const sold = parseFloat(lines[2]);

const TOTAL = salary + (sold * 0.15);

console.log(`TOTAL = R$ ${TOTAL.toFixed(2)}`);
