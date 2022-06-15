const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

export const resolution = (lines: string[]) => {
  const [A, B] = lines.map(line => parseFloat(line));
  const MEDIA = ((A * 3.5) + (B * 7.5)) / 11;

  return `MEDIA = ${MEDIA.toFixed(5)}`
}

console.log(resolution(lines));
