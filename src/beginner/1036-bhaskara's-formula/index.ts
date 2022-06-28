const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

export const resolution = (lines: string[]) => {
  const [a, b, c] = lines[0].split(' ').map(value => parseFloat(value));
  const R1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  const R2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  if (R1 && R2) {
    return `R1 = ${R1.toFixed(5)}\nR2 = ${R2.toFixed(5)}`;
  } else {
    return 'Impossivel calcular';
  }
}

console.log(resolution(lines));
