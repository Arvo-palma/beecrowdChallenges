const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

export const resolution = (lines: string[]) => {
  const [hours, avgSpeed] = lines.map(value => parseInt(value));

  const litters = (avgSpeed * hours) / 12;

  return litters.toFixed(3);
};

console.log(resolution(lines));
