import { isPositiveNumber } from "./isPositiveNumber";

describe("isPositiveNumber", () => {
  it("should return true for a numeric string", () => {
    const is = isPositiveNumber("123");

    expect(is).toBe(true);
  });

  it("should return false for a numeric string with a negative value", () => {
    const is = isPositiveNumber("-123");

    expect(is).toBe(false);
  });

  it("should return false for a non-numeric string", () => {
    const is = isPositiveNumber("abc");

    expect(is).toBe(false);
  });

  it("should return false for a special character string", () => {
    const is = isPositiveNumber("™€ßį§¶•Ľľ");

    expect(is).toBe(false);
  });
});
