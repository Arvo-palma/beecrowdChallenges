const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const lines = input.split("\n");
  const values = lines.map((line: string) => Number(line));
  return values;
};

const formatAnswer = (count: number, average: number) => {
  return [`${count} valores positivos`, `${average.toFixed(1)}`].join("\n");
};

export const resolution = (input: string) => {
  const values = prepareInput(input);
  let count = 0;
  const positivesArray: number[] = [];
  values.forEach((value: number) => {
    if (value > 0) {
      count += 1;
      positivesArray.push(value);
    }
  });
  const sum = positivesArray.reduce(
    (acc: number, value: number) => acc + value,
    0
  );
  const average = sum / positivesArray.length;

  return formatAnswer(count, average);
};

console.log(resolution(input));
