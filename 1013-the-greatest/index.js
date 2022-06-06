var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const resolution = (input) => {
  const line = input.split(' ');
  const [A, B, C] = line.map(num => parseInt(num));
  const maiorAB = (A+B+Math.abs(A-B))/2;
  const maiorAC = (A+C+Math.abs(A-C))/2;
  const maiorCB = (C+B+Math.abs(C-B))/2;
  
  const biggest = Math.max(maiorAB, maiorAC, maiorCB);

  return `${biggest} eh o maior`
}

console.log(resolution(input));
