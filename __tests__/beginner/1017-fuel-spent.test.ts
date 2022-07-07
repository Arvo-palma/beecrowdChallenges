import { resolution } from "../../src/beginner/1017-fuel-spent";
import { samples } from "../types/samples";

const samples = [
  {
    input: "10\n85",
    output: "70.833",
  },
  {
    input: "2\n92",
    output: "15.333",
  },
  {
    input: "22\n67",
    output: "122.833",
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
