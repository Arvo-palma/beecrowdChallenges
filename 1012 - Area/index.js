var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const line = input.split(' ');

const A = parseFloat(line[0]);
const B = parseFloat(line[1]);
const C = parseFloat(line[2]);

const PI = 3.14159;

const TRIANGULO = (A * C) / 2.0;
const CIRCULO = PI * Math.pow(C,2);
const TRAPEZIO = ((A + B) * C)/2.0;
const QUADRADO = B * B;
const RETANGULO = A * B;

console.log(`TRIANGULO: ${TRIANGULO.toFixed(3)}`);
console.log(`CIRCULO: ${CIRCULO.toFixed(3)}`);
console.log(`TRAPEZIO: ${TRAPEZIO.toFixed(3)}`);
console.log(`QUADRADO: ${QUADRADO.toFixed(3)}`);
console.log(`RETANGULO: ${RETANGULO.toFixed(3)}`);
