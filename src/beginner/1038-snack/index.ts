const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const request = input.split(" ");
const [code, quantity] = request.map((req: string) => parseInt(req));

const menu = [
  {
    specification: "Cachorro Quente",
    price: 4.0,
  },
  {
    specification: "X-Salada",
    price: 4.5,
  },
  {
    specification: "X-Bacon",
    price: 5.0,
  },
  {
    specification: "Torrada Simples",
    price: 2.0,
  },
  {
    specification: "Refrigerante",
    price: 1.5,
  },
];

export const resolution = (code: number, quantity: number) => {
  const totalPrice = menu[code - 1].price * quantity;
  return `Total: R$ ${totalPrice.toFixed(2)}`;
};

console.log(resolution(code, quantity));
