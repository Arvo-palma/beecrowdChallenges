const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const prepareInput = (lines) => {
  const values = lines.map(value => parseFloat(value));
  return values;
};

const formatAnswer = (total) => {
  return `${total} valores positivos`;
};

const resolution = (lines) => {
  const values = prepareInput(lines);
  let total = 0;
  values.forEach(value => {
    if (value > 0) total += 1;
  });

  return formatAnswer(total);
};

console.log(resolution(lines));
