const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const seconds = parseInt(input);

export const resolution = (seconds: number) => {
  const conversionValues = [3600, 60];
  const hoursAndMinutes = [0, 0];
  let rest = seconds;
  for (const [index, value] of conversionValues.entries()) {
    while (rest >= value) {
      hoursAndMinutes[index] += 1;
      rest -= value;
    };
  };

  return `${hoursAndMinutes[0]}:${hoursAndMinutes[1]}:${rest}`;
};

console.log(resolution(seconds));
