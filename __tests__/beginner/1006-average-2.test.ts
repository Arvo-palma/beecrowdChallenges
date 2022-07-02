import { resolution } from "../../src/beginner/1006-average-2";
import { samples } from "../types/samples";

const samples = [
  {
    input: "5.0\n6.0\n7.0",
    output: "MEDIA = 6.3",
  },
  {
    input: "5.0\n10.0\n10.0",
    output: "MEDIA = 9.0",
  },
  {
    input: "10.0\n10.0\n5.0",
    output: "MEDIA = 7.5",
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
