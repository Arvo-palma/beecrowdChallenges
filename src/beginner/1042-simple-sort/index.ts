const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split("\n");

const formatAnswer = (values: number[], lines: string[]) => {
  values.forEach((value) => {
    console.log(value);
  });
  console.log();
  lines[0].split(" ").forEach((value) => {
    console.log(parseInt(value));
  });
};

export const resolution = (lines: string[]) => {
  const values = lines[0].split(" ").map((value: string) => parseInt(value));
  const workArray = values;
  workArray.sort((a, b) => {
    return a - b;
  });
  return formatAnswer(workArray, lines);
};

resolution(lines);
