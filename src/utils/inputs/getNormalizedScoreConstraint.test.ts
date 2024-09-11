import { getNormalizedScoreConstraint } from "./getNormalizedScoreConstraint";

describe("getNormalizedScoreConstraint", () => {
  it("should normalize non-positive number", () => {
    expect(getNormalizedScoreConstraint("-1")).toBe(0);
  });

  it("should normalize non-numeric input", () => {
    expect(getNormalizedScoreConstraint("a")).toBe(0);
  });

  it("should normalize zero", () => {
    expect(getNormalizedScoreConstraint("0")).toBe(0);
  });

  it("should normalize non-zero input less than 3", () => {
    expect(getNormalizedScoreConstraint("2")).toBe(3);
  });

  it("should normalize input greater than 18", () => {
    expect(getNormalizedScoreConstraint("19")).toBe(18);
  });

  it("should normalize input in range of 3-18", () => {
    expect(getNormalizedScoreConstraint("12")).toBe(12);
  });
});
