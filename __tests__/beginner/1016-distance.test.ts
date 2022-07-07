import { resolution } from "../../src/beginner/1016-distance";
import { samples } from "../types/samples";

const samples = [
  {
    input: "30",
    output: "60 minutos",
  },
  {
    input: "110",
    output: "220 minutos",
  },
  {
    input: "7",
    output: "14 minutos",
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
