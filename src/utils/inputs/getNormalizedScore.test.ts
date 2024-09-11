import { getNormalizedScore } from "./getNormalizedScore";

describe("getNormalizedScore", () => {
  it("should normalize non-positive number", () => {
    expect(getNormalizedScore("-1")).toBe(3);
  });

  it("should normalize non-numeric input", () => {
    expect(getNormalizedScore("a")).toBe(3);
  });

  it("should normalize zero", () => {
    expect(getNormalizedScore("0")).toBe(3);
  });

  it("should normalize non-zero input less than 3", () => {
    expect(getNormalizedScore("2")).toBe(3);
  });

  it("should normalize input greater than 18", () => {
    expect(getNormalizedScore("19")).toBe(18);
  });

  it("should normalize input in range of 3-18", () => {
    expect(getNormalizedScore("12")).toBe(12);
  });
});
