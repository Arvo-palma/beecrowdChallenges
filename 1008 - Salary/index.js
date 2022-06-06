var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const NUMBER = parseInt(lines[0]);
const totalHoursWorked = parseInt(lines[1]);
const amountPerHour = parseFloat(lines[2]);

const SALARY = totalHoursWorked * amountPerHour;

console.log(`NUMBER = ${NUMBER}\nSALARY = U$ ${SALARY.toFixed(2)}`);
