const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const prepareInput = (lines) => {
  const DDD = parseInt(lines[0]);
  return DDD;
}

const resolution = (lines) => {
  const DDD = prepareInput(lines);
  switch (DDD) {
    case 61:
      return 'Brasilia';
    case 71:
      return 'Salvador';
    case 11:
      return 'Sao Paulo';
    case 21:
      return 'Rio de Janeiro';
    case 32:
      return 'Juiz de Fora';
    case 19:
      return 'Campinas';
    case 27:
      return 'Vitoria';
    case 31:
      return 'Belo Horizonte';
    default:
      return 'DDD nao cadastrado';
  }
};

console.log(resolution(lines));
