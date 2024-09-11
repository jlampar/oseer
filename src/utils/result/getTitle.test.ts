import { getTitle } from "./getTitle";

describe("getTitle", () => {
  it("should get the correct title for simple method", () => {
    const title = getTitle(1, "simple", true);

    expect(title).toBe("Rolled");
  });

  it("should get the correct title for method race-adjusted", () => {
    const title = getTitle(1, "race-adjusted", true);

    expect(title).toBe("Rolled; racial modifiers applied");
  });

  it("should get the correct title for method race-adjusted-constrained", () => {
    const titleOneAttempt = getTitle(1, "race-adjusted-constrained", false);
    const titleMultipleAttempts = getTitle(
      1000,
      "race-adjusted-constrained",
      false,
    );

    expect(titleOneAttempt).toBe("Rolled; 1 attempt; racial modifiers applied");
    expect(titleMultipleAttempts).toBe(
      "Rolled; 1000 attempts; racial modifiers applied",
    );
  });

  it("should get the correct intermediate title for method race-adjusted-afterwards", () => {
    const title = getTitle(1, "race-adjusted-afterwards", false);

    expect(title).toBe("Rolled");
  });

  it("should get the correct final title for method race-adjusted-afterwards", () => {
    const title = getTitle(1, "race-adjusted-afterwards", true);

    expect(title).toBe("Racial modifiers applied");
  });

  it("should get the correct intermediate title for method race-adjusted-afterwards-constrained", () => {
    const titleOneAttempt = getTitle(
      1,
      "race-adjusted-afterwards-constrained",
      false,
    );
    const titleMultipleAttempts = getTitle(
      1000,
      "race-adjusted-afterwards-constrained",
      false,
    );

    expect(titleOneAttempt).toBe("Rolled; 1 attempt");
    expect(titleMultipleAttempts).toBe("Rolled; 1000 attempts");
  });

  it("should get the correct final title for method race-adjusted-afterwards-constrained", () => {
    const title = getTitle(1, "race-adjusted-afterwards-constrained", true);

    expect(title).toBe("Racial modifiers applied");
  });
});
