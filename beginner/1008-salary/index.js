const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const resolution = (lines) => {
  const [NUMBER, totalHoursWorked, amountPerHour] = lines;
  const SALARY = parseInt(totalHoursWorked) * parseFloat(amountPerHour);

  return `NUMBER = ${parseInt(NUMBER)}\nSALARY = U$ ${SALARY.toFixed(2)}`
};

console.log(resolution(lines));
