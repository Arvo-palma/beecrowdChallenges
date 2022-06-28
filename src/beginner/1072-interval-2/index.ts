const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const lines = input.split("\n");
  const values = lines.filter(Boolean).map((line: string) => parseInt(line));
  return values;
};

export const resolution = (input: string) => {
  const [quantity, ...values] = prepareInput(input);
  let countIn = 0;
  let countOut = 0;
  values.forEach((value: number) => {
    const areInTheInterval = value >= 10 && value <= 20;
    areInTheInterval ? (countIn += 1) : (countOut += 1);
  });

  return `${countIn} in\n${countOut} out`;
};

console.log(resolution(input));
