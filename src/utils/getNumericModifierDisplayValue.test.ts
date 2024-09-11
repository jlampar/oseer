import { getNumericModifierDisplayValue } from "./getNumericModifierDisplayValue";

describe("getNumericModifierDisplayValue", () => {
  it("should return zero for value of 0 with hideZero false and without suffix", () => {
    const result = getNumericModifierDisplayValue(0);

    expect(result).toEqual("0");
  });

  it("should return zero and suffix for value of 0 with hideZero false and with suffix", () => {
    const result = getNumericModifierDisplayValue(0, false, "%");

    expect(result).toEqual("0%");
  });

  it("should return an empty string for value of 0 with hideZero true and without suffix", () => {
    const result = getNumericModifierDisplayValue(0, true);

    expect(result).toEqual("");
  });

  it("should return value with a plus sign for value above 0", () => {
    const result = getNumericModifierDisplayValue(1);

    expect(result).toEqual("+1");
  });

  it("should return value with a minus sign for value below 0", () => {
    const result = getNumericModifierDisplayValue(-1);

    expect(result).toEqual("-1");
  });

  it("should return value with a plus sign for value above 0 and its suffix if provided", () => {
    const result = getNumericModifierDisplayValue(1, false, "%");

    expect(result).toEqual("+1%");
  });

  it("should return value with a minus sign for value below 0 and its suffix if provided", () => {
    const result = getNumericModifierDisplayValue(-1, false, "%");

    expect(result).toEqual("-1%");
  });

  it("should return empty string for value of 0 with hideZero true but provided suffix", () => {
    const result = getNumericModifierDisplayValue(0, true, "%");

    expect(result).toEqual("");
  });
});
