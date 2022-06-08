const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var number = parseFloat(input);

const resolution = (value) => {
  if (value >= 0 && value <= 100) {
    const intervals = [25, 50, 75];
    const interval = intervals.find(interval => value <= interval);
    switch (intervals.indexOf(interval)) {
      case 0:
        return 'Intervalo [0,25]';
      case 1:
        return 'Intervalo (25,50]';
      case 2:
        return 'Intervalo (50,75]';
      default:
        return 'Intervalo (75,100]';
      }
  } else {
    return 'Fora de intervalo';
  }
}

console.log(resolution(number));
