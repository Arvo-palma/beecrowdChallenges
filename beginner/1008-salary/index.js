var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const resolution = (lines) => {
  const [NUMBER, totalHoursWorked, amountPerHour] = lines;
  const SALARY = parseInt(totalHoursWorked) * parseFloat(amountPerHour);

  return `NUMBER = ${parseInt(NUMBER)}\nSALARY = U$ ${SALARY.toFixed(2)}`
};

console.log(resolution(lines));
