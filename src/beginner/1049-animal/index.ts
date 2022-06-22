const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

export const resolution = (lines: string[]) => {
  const classification = {
    vertebrado: {
      ave: {
        carnivoro: "aguia",
        onivoro: "pomba",
      },
      mamifero: {
        onivoro: "homem",
        herbivoro: "vaca",
      },
    },
    invertebrado: {
      inseto: {
        hematofago: "pulga",
        herbivoro: "lagarta",
      },
      anelideo: {
        hematofago: "sanguessuga",
        onivoro: "minhoca",
      },
    },
  };
  const firstClassification =
    classification[lines[0] as keyof typeof classification];
  const secondClassification =
    firstClassification[lines[1] as keyof typeof firstClassification];
  const thirdClassification = secondClassification[lines[2]];
  return thirdClassification;
};

console.log(resolution(lines));
