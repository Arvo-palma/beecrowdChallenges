const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const lines = input.split("\n");
  return lines;
};

export const resolution = (input: string) => {
  const [line1, line2] = prepareInput(input);
  const [_code1, amount1, price1] = line1.split(" ");
  const [_code2, amount2, price2] = line2.split(" ");
  const total =
    parseInt(amount1) * parseFloat(price1) +
    parseInt(amount2) * parseFloat(price2);

  return `VALOR A PAGAR: R$ ${total.toFixed(2)}`;
};

console.log(resolution(input));
