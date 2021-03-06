const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var age = parseInt(input);

export const resolution = (days: number) => {
  const conversionDays = [365, 30];
  const counter = [0, 0];
  let rest = days;

  for (const [index, value] of conversionDays.entries()) {
    while (rest >= value) {
      counter[index] += 1;
      rest -= value;
    }
  }

  return `${counter[0]} ano(s)\n${counter[1]} mes(es)\n${rest} dia(s)`;
}

console.log(resolution(age));
