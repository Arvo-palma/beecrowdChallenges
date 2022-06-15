const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

export const resolution = (input: string) => {
  const line = input.split(' ');
  const [A, B, C] = line.map(value => parseFloat(value));

  const PI = 3.14159;
  const TRIANGULO = (A * C) / 2.0;
  const CIRCULO = PI * Math.pow(C, 2);
  const TRAPEZIO = ((A + B) * C) / 2.0;
  const QUADRADO = B * B;
  const RETANGULO = A * B;

  console.log(`TRIANGULO: ${TRIANGULO.toFixed(3)}`);
  console.log(`CIRCULO: ${CIRCULO.toFixed(3)}`);
  console.log(`TRAPEZIO: ${TRAPEZIO.toFixed(3)}`);
  console.log(`QUADRADO: ${QUADRADO.toFixed(3)}`);
  console.log(`RETANGULO: ${RETANGULO.toFixed(3)}`);
};

resolution(input);
