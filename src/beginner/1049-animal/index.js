const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const resolution = (lines) => {
  const classification = {
    'vertebrado': {
      'ave': {
        'carnivoro': 'aguia',
        'onivoro': 'pomba'
      },
      'mamifero': {
        'onivoro': 'homem',
        'herbivoro': 'vaca'
      }
    },
    'invertebrado': {
      'inseto': {
        'hematofago': 'pulga',
        'herbivoro': 'lagarta'
      },
      'anelideo': {
        'hematofago': 'sanguessuga',
        'onivoro': 'minhoca'
      }
    }
  };
  return classification[lines[0]][lines[1]][lines[2]];
};

console.log(resolution(lines));
