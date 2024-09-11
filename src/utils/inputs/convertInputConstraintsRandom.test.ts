import { convertInputConstraintsRandom } from "./convertInputConstraintsRandom";

describe("convertInputConstraintsRandom", () => {
  it("should correctly convert constraints", () => {
    const input: Record<string, string> = {
      numberOfScores: "2",
      threshold: "14",
    };

    const converted = convertInputConstraintsRandom(input);

    expect(converted.numberOfScores).toBe(2);
    expect(converted.threshold).toBe(14);
  });

  it("should correctly convert constraints when there are too high or low values", () => {
    const inputTooHigh: Record<string, string> = {
      numberOfScores: "7",
      threshold: "19",
    };
    const inputTooLow: Record<string, string> = {
      numberOfScores: "-1",
      threshold: "2",
    };

    const convertedTooHigh = convertInputConstraintsRandom(inputTooHigh);
    const convertedTooLow = convertInputConstraintsRandom(inputTooLow);

    expect(convertedTooHigh.numberOfScores).toBe(6);
    expect(convertedTooHigh.threshold).toBe(18);
    expect(convertedTooLow.numberOfScores).toBe(0);
    expect(convertedTooLow.threshold).toBe(3);
  });

  it("should correctly convert constraints when there are non numeric values", () => {
    const input: Record<string, string> = {
      numberOfScores: "?",
      threshold: "a",
    };

    const converted = convertInputConstraintsRandom(input);

    expect(converted.numberOfScores).toBe(0);
    expect(converted.threshold).toBe(0);
  });
});
