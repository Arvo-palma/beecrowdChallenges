import { resolution } from "../../src/beginner/1014-consumption";
import { samples } from "../types/samples";

const samples = [
  {
    input: "500\n35.0",
    output: "14.286 km/l",
  },
  {
    input: "2254\n124.4",
    output: "18.119 km/l",
  },
  {
    input: "4554\n464.6",
    output: "9.802 km/l",
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
