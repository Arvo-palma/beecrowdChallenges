import { resolution } from "../../src/beginner/1002-area-of-a-circle";

type samples = [
  {
    input: string;
    output: string;
  }
];
const samples = [
  {
    input: "2.00",
    output: "A=12.5664",
  },
  {
    input: "100.64",
    output: "A=31819.3103",
  },
  {
    input: "150.00",
    output: "A=70685.7750",
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
