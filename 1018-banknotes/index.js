var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const resolution = (input) => {
    let value = parseInt(input);
    const initialValue = value;
    const values = [100, 50, 20, 10, 5, 2, 1];
    const bills = [0, 0, 0, 0, 0, 0, 0];

    for (let index = 0; index < values.length; index += 1) {
        while (value >= values[index]) {
            bills[index] += 1;
            value -= values[index];
        }
    }

    result = `${initialValue}\n`;
    for (let index = 0; index < values.length; index += 1) {
        result += `${bills[index]} nota(s) de R$ ${values[index]},00\n`;
    }
    console.log(result.slice(0, -1));
};

resolution(input);
