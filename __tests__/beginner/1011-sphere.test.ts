import { resolution } from "../../src/beginner/1011-sphere";
import { samples } from "../types/samples";

const samples = [
  {
    input: "3\n",
    output: "VOLUME = 113.097",
  },
  {
    input: "15\n",
    output: "VOLUME = 14137.155",
  },
  {
    input: "1523\n",
    output: "VOLUME = 14797486501.627",
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
