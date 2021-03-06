const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

export const resolution = (lines: string[]) => {
  const [_firstName, salary, sold] = lines.map(line => parseFloat(line));
  const TOTAL = salary + (sold * 0.15);

  return `TOTAL = R$ ${TOTAL.toFixed(2)}`
}

console.log(resolution(lines));
