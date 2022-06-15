const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const PI = 3.14159;
const R = parseFloat(input);

export const resolution = (ray: number) => {
  const A = PI * (ray * ray);
  return `A=${A.toFixed(4)}`;
}

console.log(resolution(R));
