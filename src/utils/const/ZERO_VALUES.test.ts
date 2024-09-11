import { ZERO_VALUES } from "./ZERO_VALUES";

describe("ZERO_VALUES", () => {
  it("should have correct score for every ability", () => {
    const everyScoreIsZero = Object.values(ZERO_VALUES).every(
      (score) => score === 0,
    );

    expect(everyScoreIsZero).toEqual(true);
  });
});
