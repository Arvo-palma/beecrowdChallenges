var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const line = input.split(' ');

const A = parseInt(line[0]);
const B = parseInt(line[1]);
const C = parseInt(line[2]);

const maiorAB = (A+B+Math.abs(A-B))/2;
const maiorAC = (A+C+Math.abs(A-C))/2;
const maiorCB = (C+B+Math.abs(C-B))/2;

const biggest = Math.max(maiorAB, maiorAC, maiorCB);

console.log(`${biggest} eh o maior`);
