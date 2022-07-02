import { resolution } from "../../src/beginner/1008-salary";
import { samples } from "../types/samples";

const samples = [
  {
    input: "25\n100\n5.50",
    output: "NUMBER = 25\nSALARY = U$ 550.00",
  },
  {
    input: "1\n200\n20.50",
    output: "NUMBER = 1\nSALARY = U$ 4100.00",
  },
  {
    input: "6\n145\n15.55",
    output: "NUMBER = 6\nSALARY = U$ 2254.75",
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
