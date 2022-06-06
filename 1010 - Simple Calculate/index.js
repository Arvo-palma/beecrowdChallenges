var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line1 = lines[0].split(' ');
const line2 = lines[1].split(' ');

const amount1 = parseInt(line1[1]);
const price1 = parseFloat(line1[2]);
const amount2 = parseInt(line2[1]);
const price2 = parseFloat(line2[2]);

const total = (amount1 * price1) + (amount2 * price2);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
