import { resolution } from "../../src/beginner/1000-hello-world!";

describe("The resolution return", () => {
  test("Print Hello World!", () => {
    const logSpy = jest.spyOn(console, "log");
    resolution();
    expect(logSpy).toHaveBeenCalledWith("Hello World!");
  });
});
