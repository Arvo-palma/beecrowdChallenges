var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const distance = parseInt(input);

const time = distance * 2;

console.log(`${time} minutos`);
