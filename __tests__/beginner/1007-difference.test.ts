import { resolution } from "../../src/beginner/1007-difference";
import { samples } from "../types/samples";

const samples = [
  {
    input: "5\n6\n7\n8",
    output: "DIFERENCA = -26",
  },
  {
    input: "0\n0\n7\n8",
    output: "DIFERENCA = -56",
  },
  {
    input: "5\n6\n-7\n8",
    output: "DIFERENCA = 86",
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
