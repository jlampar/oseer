import { indent } from "./indent";

describe("indent", () => {
  it("should correctly indent text when the indentSize is 0", () => {
    const styled = indent("text", 0);

    expect(styled).toEqual("text");
  });

  it("should correctly indent text when the indentSize is greater than 0", () => {
    const styled = indent("text", 1);

    expect(styled).toEqual(" text");
  });

  it("should throw an error when supplied with a negative indentSize", () => {
    expect(() => {
      indent("text", -1);
    }).toThrow("indentSize cannot be negative");
  });
});
