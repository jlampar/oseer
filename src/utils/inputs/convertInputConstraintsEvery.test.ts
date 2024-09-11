import { convertInputConstraintsEvery } from "./convertInputConstraintsEvery";

describe("convertInputConstraintsEvery", () => {
  it("should correctly convert constraints", () => {
    const input: Record<string, string> = {
      threshold: "14",
    };

    const converted = convertInputConstraintsEvery(input);

    expect(converted.threshold).toBe(14);
  });

  it("should correctly convert constraints when there are too high or low values", () => {
    const inputTooHigh: Record<string, string> = {
      threshold: "19",
    };
    const inputTooLow: Record<string, string> = {
      threshold: "2",
    };

    const convertedTooHigh = convertInputConstraintsEvery(inputTooHigh);
    const convertedTooLow = convertInputConstraintsEvery(inputTooLow);

    expect(convertedTooHigh.threshold).toBe(18);
    expect(convertedTooLow.threshold).toBe(3);
  });

  it("should correctly convert constraints when there are non numeric values", () => {
    const input: Record<string, string> = {
      threshold: "a",
    };

    const converted = convertInputConstraintsEvery(input);

    expect(converted.threshold).toBe(0);
  });
});
