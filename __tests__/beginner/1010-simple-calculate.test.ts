import { resolution } from "../../src/beginner/1010-simple-calculate";
import { samples } from "../types/samples";

const samples = [
  {
    input: "12 1 5.30\n16 2 5.10",
    output: "VALOR A PAGAR: R$ 15.50",
  },
  {
    input: "13 2 15.30\n161 4 5.20",
    output: "VALOR A PAGAR: R$ 51.40",
  },
  {
    input: "1 1 15.10\n2 1 15.10",
    output: "VALOR A PAGAR: R$ 30.20",
  },
];

describe("The resolution return", () => {
  test("Returns a string", () => {
    samples.map((sample) => {
      expect(typeof resolution(sample.input)).toBe("string");
    });
  });
  test("Returns right output", () => {
    samples.map((sample) => {
      console.log(sample.input);
      expect(resolution(sample.input)).toBe(sample.output);
    });
  });
});
