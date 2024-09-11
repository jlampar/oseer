import { Ability, ConstraintsThresholded } from "../../types";
import { isUnreachableConstraintsForTypeRandom } from "./isUnreachableConstraintsForTypeRandom";

describe("isUnreachableConstraintsForTypeRandom", () => {
  const racialModifiers: Record<Ability, number> = {
    STR: -11,
    DEX: -11,
    CON: 0,
    WIS: 0,
    INT: 0,
    CHA: 0,
  };

  it("should return true for a condtions impossible for the constrained re-rolls to resolve", () => {
    const constraints: ConstraintsThresholded = {
      numberOfScores: 5,
      threshold: 8,
    };

    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    expect(
      isUnreachableConstraintsForTypeRandom(constraints, racialModifiers),
    ).toBe(true);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  \x1b[31mToo many scores adjusted by the applicable modifiers are too low to reach the treshold!\n\x1b[0m",
    );
  });

  it("should return false for a condtions possible for the constrained re-rolls to resolve", () => {
    const constraints: ConstraintsThresholded = {
      numberOfScores: 3,
      threshold: 8,
    };

    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    expect(
      isUnreachableConstraintsForTypeRandom(constraints, racialModifiers),
    ).toBe(false);
    expect(consoleLogSpy).not.toHaveBeenCalled();
  });
});
