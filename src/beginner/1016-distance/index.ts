const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

export const resolution = (input: string) => {
  return `${parseInt(input) * 2} minutos`;
};

console.log(resolution(input));
