const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

export const resolution = (lines: string[]) => {
  const [A, B, C] = lines.map(line => parseFloat(line));
  const MEDIA = ((A * 2) + (B * 3) + (C * 5)) / 10;

  return `MEDIA = ${MEDIA.toFixed(1)}`
}

console.log(resolution(lines));
