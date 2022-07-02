const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const lines = input.split("\n");

  return lines;
};

export const resolution = (input: string) => {
  const [NUMBER, totalHoursWorked, amountPerHour] = prepareInput(input);
  const SALARY = parseInt(totalHoursWorked) * parseFloat(amountPerHour);

  return `NUMBER = ${parseInt(NUMBER)}\nSALARY = U$ ${SALARY.toFixed(2)}`;
};

console.log(resolution(input));
