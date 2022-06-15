const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const prepareInput = (lines) => {
  const index = parseInt(lines[0]);
  return index;
};

const resolution = (lines) => {
  const index = prepareInput(lines);
  const listOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return listOfMonths[index - 1];
};

console.log(resolution(lines));
