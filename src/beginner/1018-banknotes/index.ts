const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

export const resolution = (input: string) => {
  let value = parseInt(input);
  const initialValue = value;
  const values = [100, 50, 20, 10, 5, 2, 1];
  const bills = [0, 0, 0, 0, 0, 0, 0];

  for (let index = 0; index < values.length; index += 1) {
    while (value >= values[index]) {
      bills[index] += 1;
      value -= values[index];
    }
  }

  let result = `${initialValue}\n`;
  for (let index = 0; index < values.length; index += 1) {
    result += `${bills[index]} nota(s) de R$ ${values[index]},00\n`;
  }
  console.log(result.slice(0, -1));
};

resolution(input);
