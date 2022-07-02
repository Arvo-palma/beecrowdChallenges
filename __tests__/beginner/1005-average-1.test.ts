import { resolution } from "../../src/beginner/1005-average-1";
import { samples } from "../types/samples";

const samples = [
  {
    input: "5.0\n7.1",
    output: "MEDIA = 6.43182",
  },
  {
    input: "0.0\n7.1",
    output: "MEDIA = 4.84091",
  },
  {
    input: "10.0\n10.0",
    output: "MEDIA = 10.00000",
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
