const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const lines = input.split("\n");
  return parseFloat(lines[0]);
};

const checkRange = (salary: number) => {
  const ranges = {
    "0 - 400.00": salary - 400 <= 0,
    "400.01 - 800.00": salary - 400 > 0 && salary - 800 <= 0,
    "800.01 - 1200.00": salary - 800 > 0 && salary - 1200 <= 0,
    "1200.01 - 2000.00": salary - 1200 > 0 && salary - 2000 <= 0,
    "Above 2000.00": salary - 2000 > 0,
  };

  let rightRange = null;

  for (const range in ranges) {
    // typo baseed in https://bobbyhadz.com/blog/typescript-element-implicitly-has-any-type-expression
    if (ranges[range as keyof typeof ranges] === true) rightRange = range;
  }

  switch (rightRange) {
    case "0 - 400.00":
      return 0.15;
    case "400.01 - 800.00":
      return 0.12;
    case "800.01 - 1200.00":
      return 0.1;
    case "1200.01 - 2000.00":
      return 0.07;
    case "Above 2000.00":
      return 0.04;
    default:
      return 0;
  }
};

const formatAnswer = (
  newSalary: number,
  difference: number,
  percentage: number
) => {
  const response = {
    salary: `Novo salario: ${newSalary.toFixed(2)}\n`,
    readjustment: `Reajuste ganho: ${difference.toFixed(2)}\n`,
    percentage: `Em percentual: ${percentage.toFixed(0)} %`,
  };
  return response.salary + response.readjustment + response.percentage;
};

export const resolution = (input: string) => {
  const salary = prepareInput(input);
  const readjustment = checkRange(salary);
  const difference = salary * readjustment;
  const newSalary = salary + difference;
  const percentage = readjustment * 100;
  return formatAnswer(newSalary, difference, percentage);
};

console.log(resolution(input));
