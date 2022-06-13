const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var monetaryValue = parseFloat(input);

const billsAndCoins = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01];
const JSdivisionAdjust = 0.00001;
// Ajuste de imprecisão da divisão do javascript com base em https://www.beecrowd.com.br/judge/en/questions/view/1021/12059

const resolution = (total, billsAndCoins) => {
  const exchange = billsAndCoins.reduce((acc, value) => {
    acc[value] = parseInt(total / value);
    total = total % value + JSdivisionAdjust;
    return acc;
  }, {});

  return `NOTAS:\n${exchange['100']} nota(s) de R$ 100.00\n${exchange['50']} nota(s) de R$ 50.00\n${exchange['20']} nota(s) de R$ 20.00\n${exchange['10']} nota(s) de R$ 10.00\n${exchange['5']} nota(s) de R$ 5.00\n${exchange['2']} nota(s) de R$ 2.00\nMOEDAS:\n${exchange['1']} moeda(s) de R$ 1.00\n${exchange['0.5']} moeda(s) de R$ 0.50\n${exchange['0.25']} moeda(s) de R$ 0.25\n${exchange['0.1']} moeda(s) de R$ 0.10\n${exchange['0.05']} moeda(s) de R$ 0.05\n${exchange['0.01']} moeda(s) de R$ 0.01`;
}

console.log(resolution(monetaryValue, billsAndCoins));
