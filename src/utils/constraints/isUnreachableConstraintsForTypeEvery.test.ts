import { Ability, ConstraintsThresholded } from "../../types";
import { isUnreachableConstraintsForTypeEvery } from "./isUnreachableConstraintsForTypeEvery";

describe("isUnreachableConstraintsForTypeEvery", () => {
  const racialModifiers: Record<Ability, number> = {
    STR: -2,
    DEX: -2,
    CON: -1,
    WIS: -4,
    INT: -2,
    CHA: -3,
  };

  it("should return true for a condtions impossible for the constrained re-rolls to resolve", () => {
    const constraints: Pick<ConstraintsThresholded, "threshold"> = {
      threshold: 17,
    };

    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    expect(
      isUnreachableConstraintsForTypeEvery(constraints, racialModifiers),
    ).toBe(true);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  \x1b[31mEvery score adjusted by the applicable modifier is below threshold!\n\x1b[0m",
    );
  });

  it("should return false for a condtions possible for the constrained re-rolls to resolve", () => {
    const constraints: Pick<ConstraintsThresholded, "threshold"> = {
      threshold: 8,
    };

    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    expect(
      isUnreachableConstraintsForTypeEvery(constraints, racialModifiers),
    ).toBe(false);
    expect(consoleLogSpy).not.toHaveBeenCalled();
  });
});
