import { resolution } from "../../src/beginner/1015-distance-between-two-points";
import { samples } from "../types/samples";

const samples = [
  {
    input: "1.0 7.0\n5.0 9.0",
    output: "4.4721",
  },
  {
    input: "-2.5 0.4\n12.1 7.3",
    output: "16.1484",
  },
  {
    input: "2.5 -0.4\n-12.2 7.0",
    output: "16.4575",
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
