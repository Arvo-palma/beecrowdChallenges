var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var monetaryValue = parseFloat(input);

const resolution = (total) => {
  const billsAndCoins = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01];
  const exchange = billsAndCoins.map(_item => 0);
  let rest = total;
  for (const [index, value] of billsAndCoins.entries()) {
    while (rest >= value) {
      exchange[index] += 1;
      rest -= value;
    }
  }

  const printResults = () => {
    console.log(`NOTAS:`);
    for (let index = 0; index < 6; index += 1) {
      console.log(`${exchange[index]} nota(s) de R$ ${billsAndCoins[index].toFixed(2)}`);
    }
    console.log(`MOEDAS:`);
    for (let index = 6; index < exchange.length; index += 1) {
      console.log(`${exchange[index]} moeda(s) de R$ ${billsAndCoins[index].toFixed(2)}`);
    }
  }

  return printResults();
}

resolution(monetaryValue);
