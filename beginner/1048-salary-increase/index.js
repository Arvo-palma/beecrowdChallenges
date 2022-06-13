const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const prepareInput = (lines) => {
  return parseFloat(lines[0]);
};

const checkRange = (salary) => {
  const ranges = {
    '0 - 400.00': salary - 400 <= 0,
    '400.01 - 800.00': salary - 400 > 0 && salary - 800 <= 0,
    '800.01 - 1200.00': salary - 800 > 0 && salary - 1200 <= 0,
    '1200.01 - 2000.00': salary - 1200 > 0 && salary - 2000 <= 0,
    'Above 2000.00': salary - 2000 > 0,
  };

  let rightRange = null;

  for (const range in ranges) {
    if (ranges[range] === true) rightRange = range;
  };

  switch (rightRange) {
    case '0 - 400.00':
      return 0.15;
    case '400.01 - 800.00':
      return 0.12;
    case '800.01 - 1200.00':
      return 0.10;
    case '1200.01 - 2000.00':
      return 0.07;
    case 'Above 2000.00':
      return 0.04;
    default:
      return 'Error';
  }
};

const formatAnswer = (newSalary, difference, percentage) => {
  const response = {
    'salary': `Novo salario: ${newSalary.toFixed(2)}\n`,
    'readjustment': `Reajuste ganho: ${difference.toFixed(2)}\n`,
    'percentage': `Em percentual: ${parseInt(percentage)} %`,
  };
  return response.salary + response.readjustment + response.percentage;
};

const resolution = (lines) => {
  const salary = prepareInput(lines);
  const readjustment = checkRange(salary);
  const difference = salary * readjustment;
  const newSalary = salary + difference;
  const percentage = readjustment * 100;
  return formatAnswer(newSalary, difference, percentage);
};

console.log(resolution(lines));
