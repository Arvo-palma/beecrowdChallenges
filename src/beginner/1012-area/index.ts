const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const line = input.split(" ");
  const values = line.map((value) => parseFloat(value));
  return values;
};

export const resolution = (input: string) => {
  const [A, B, C] = prepareInput(input);

  const PI = 3.14159;
  const TRIANGULO = (A * C) / 2.0;
  const CIRCULO = PI * Math.pow(C, 2);
  const TRAPEZIO = ((A + B) * C) / 2.0;
  const QUADRADO = B * B;
  const RETANGULO = A * B;

  return [
    `TRIANGULO: ${TRIANGULO.toFixed(3)}`,
    `CIRCULO: ${CIRCULO.toFixed(3)}`,
    `TRAPEZIO: ${TRAPEZIO.toFixed(3)}`,
    `QUADRADO: ${QUADRADO.toFixed(3)}`,
    `RETANGULO: ${RETANGULO.toFixed(3)}`,
  ].join("\n");
};

console.log(resolution(input));
