import { resolution } from "../../src/beginner/1001-extremely-basic";
import { samples } from "../types/samples";

const samples = [
  {
    input: "10\n9",
    output: "X = 19",
  },
  {
    input: "-10\n4",
    output: "X = -6",
  },
  {
    input: "15\n-7",
    output: "X = 8",
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
      expect(resolution(sample.input)).toBe(sample.output);
    });
  });
});
