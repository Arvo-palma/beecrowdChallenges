const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const prepareInput = (lines: string[]) => {
  const stringValues = lines[0].split(' ');
  const numberValues = stringValues.map(value => parseFloat(value));
  const [A, B, C] = numberValues.sort((a, b) => b - a);

  return [A, B, C];
};

const formatAnswer = (conditions: Array<{ message: string, status: boolean }>) => {
  if (conditions[0].status) {
    console.log(conditions[0].message);
  } else {
    return conditions.forEach(condition => {
      if (condition.status) console.log(condition.message);
    });
  }
};

export const resolution = (lines: string[]) => {
  const [A, B, C] = prepareInput(lines);
  const conditions = [
    { message: 'NAO FORMA TRIANGULO', status: (A >= B + C) },
    {
      message: 'TRIANGULO RETANGULO',
      status: (Math.pow(A, 2) === Math.pow(B, 2) + Math.pow(C, 2))
    },
    {
      message: 'TRIANGULO OBTUSANGULO',
      status: (Math.pow(A, 2) > Math.pow(B, 2) + Math.pow(C, 2))
    },
    {
      message: 'TRIANGULO ACUTANGULO',
      status: (Math.pow(A, 2) < Math.pow(B, 2) + Math.pow(C, 2))
    },
    {
      message: 'TRIANGULO EQUILATERO',
      status: (A === B && B === C)
    },
    {
      message: 'TRIANGULO ISOSCELES',
      status: (A !== B ? B === C : B !== C)
    }
  ];

  return formatAnswer(conditions);
};

resolution(lines);
