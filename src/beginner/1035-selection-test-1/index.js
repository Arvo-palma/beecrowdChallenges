const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const resolution = (lines) => {
  const [A, B, C, D] = lines[0].split(' ').map(value => parseInt(value));
  if (B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && A % 2 === 0) {
    return 'Valores aceitos';
  } else {
    return 'Valores nao aceitos';
  }
}

console.log(resolution(lines));
