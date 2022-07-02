import { resolution } from "../../src/beginner/1003-simple-sum";
import { samples } from "../types/samples";

const samples = [
  {
    input: "30\n10",
    output: "SOMA = 40",
  },
  {
    input: "-30\n10",
    output: "SOMA = -20",
  },
  {
    input: "0\n0",
    output: "SOMA = 0",
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
