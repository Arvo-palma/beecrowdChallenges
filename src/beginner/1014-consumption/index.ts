const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

export const resolution = (lines: string[]) => {
  const consumption = parseInt(lines[0]) / parseFloat(lines[1]);
  return `${consumption.toFixed(3)} km/l`
};

console.log(resolution(lines));
