const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const lines = input.split("\n");
  const values = lines.filter(Boolean).map((line: string) => Number(line));
  return values;
};

const formatAnswer = (
  countEven: number,
  countOdd: number,
  countPositive: number,
  countNegative: number
) => {
  return [
    `${countEven} valor(es) par(es)`,
    `${countOdd} valor(es) impar(es)`,
    `${countPositive} valor(es) positivo(s)`,
    `${countNegative} valor(es) negativo(s)`,
  ].join("\n");
};

export const resolution = (input: string) => {
  const values = prepareInput(input);
  let countEven = 0;
  let countOdd = 0;
  let countPositive = 0;
  let countNegative = 0;
  const conditions = {
    isEven: (value: number) =>
      value % 2 === 0 ? (countEven += 1) : (countOdd += 1),
    isPositive: (value: number) =>
      value > 0 ? (countPositive += 1) : (countNegative += 1),
  };
  values.forEach((value: number) => {
    conditions.isEven(value);
    if (value !== 0) conditions.isPositive(value);
  });
  return formatAnswer(countEven, countOdd, countPositive, countNegative);
};

console.log(resolution(input));
