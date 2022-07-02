import { resolution } from "../../src/beginner/1009-salary-with-bonus";
import { samples } from "../types/samples";

const samples = [
  {
    input: "JOAO\n500.00\n1230.30",
    output: "TOTAL = R$ 684.54",
  },
  {
    input: "PEDRO\n700.00\n0.00",
    output: "TOTAL = R$ 700.00",
  },
  {
    input: "MANGOJATA\n1700.00\n1230.50",
    output: "TOTAL = R$ 1884.58",
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
