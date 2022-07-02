import { resolution } from "../../src/beginner/1004-simple-product";
import { samples } from "../types/samples";

const samples = [
  {
    input: "3\n9",
    output: "PROD = 27",
  },
  {
    input: "-30\n10",
    output: "PROD = -300",
  },
  {
    input: "0\n9",
    output: "PROD = 0",
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
