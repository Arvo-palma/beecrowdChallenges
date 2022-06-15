const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
const values = lines[0].split(' ').map(value => parseInt(value));

const resolution = (values) => {
  const workArray = values;
  workArray.sort((a,b) => {
    return a - b;
  });
  return workArray;
}

const formatAnswer = (values) => {
  const orderedArray = resolution(values);
  orderedArray.forEach(value => {
    console.log(value);
  });
  console.log();
  lines[0].split(' ').forEach(value => {
    console.log(parseInt(value));
  });
}

formatAnswer(values);
