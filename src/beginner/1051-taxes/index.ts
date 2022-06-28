const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const lines = input.split("\n");
  const salary = parseFloat(lines[0]);
  return salary;
};

export const resolution = (input: string) => {
  const salary = prepareInput(input);
  const taxAbove2000 = (salary - 2000) * 0.08;
  const taxAbove3000 = (salary - 3000) * 0.18 + 80; // 80 = 1000*0.08 Tax from last category
  const taxAbove4500 = (salary - 4500) * 0.28 + 350; // 350 = Tax from two earlier categories
  let taxCategory = null;
  if (salary > 2000 && salary <= 3000) taxCategory = 2;
  if (salary > 3000 && salary <= 4500) taxCategory = 3;
  if (salary > 4500) taxCategory = 4;
  switch (taxCategory) {
    case 2:
      return `R$ ${taxAbove2000.toFixed(2)}`;
    case 3:
      return `R$ ${taxAbove3000.toFixed(2)}`;
    case 4:
      return `R$ ${taxAbove4500.toFixed(2)}`;
    default:
      return "Isento";
  }
};

console.log(resolution(input));
