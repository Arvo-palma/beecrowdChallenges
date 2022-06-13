const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (count) => {
  return `O JOGO DUROU ${count} HORA(S)`;
};

const prepareInput = (lines) => {
  const stringValues = lines[0].split(' ');
  const [start, end] = stringValues.map(value => parseInt(value));

  return [start, end];
};

const resolution = (lines) => {
  const [start, end] = prepareInput(lines);
  if (start === end) return formatAnswer(24);
  if (end - start < 0) return formatAnswer(end + 24 - start);
  if (end - start > 0) return formatAnswer(end - start);
};

console.log(resolution(lines));
