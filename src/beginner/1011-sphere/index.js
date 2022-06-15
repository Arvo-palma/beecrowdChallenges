const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const VOLUME = (4/3.0) * 3.14159 * Math.pow(parseFloat(input), 3);

console.log(`VOLUME = ${VOLUME.toFixed(3)}`);