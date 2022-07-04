import { resolution } from "../../src/beginner/1013-the-greatest";
import { samples } from "../types/samples";

const samples = [
  {
    input: "7 14 106",
    output: "106 eh o maior",
  },
  {
    input: "217 14 6",
    output: "217 eh o maior",
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
