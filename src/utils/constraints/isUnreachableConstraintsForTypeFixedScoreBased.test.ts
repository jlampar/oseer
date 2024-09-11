import { Ability } from "../../types";
import { isUnreachableConstraintsForTypeFixedScoreBased } from "./isUnreachableConstraintsForTypeFixedScoreBased";

describe("isUnreachableConstraintsForTypeFixedScoreBased", () => {
  const racialModifiers: Record<Ability, number> = {
    STR: 2,
    DEX: -2,
    CON: 1,
    WIS: -1,
    INT: 0,
    CHA: 0,
  };

  it("should return true for a condtions impossible for the constrained re-rolls to resolve", () => {
    const constraints: Record<Ability, number> = {
      STR: 0,
      DEX: 17,
      CON: 0,
      WIS: 0,
      INT: 0,
      CHA: 0,
    };

    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    expect(
      isUnreachableConstraintsForTypeFixedScoreBased(
        constraints,
        racialModifiers,
      ),
    ).toBe(true);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  \x1b[31mIt's not possible to require minimum DEX of 17 with a racial modifier of -2!\n\x1b[0m",
    );
  });

  it("should return false for a condtions possible for the constrained re-rolls to resolve", () => {
    const constraints: Record<Ability, number> = {
      STR: 0,
      DEX: 14,
      CON: 0,
      WIS: 0,
      INT: 0,
      CHA: 0,
    };

    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    expect(
      isUnreachableConstraintsForTypeFixedScoreBased(
        constraints,
        racialModifiers,
      ),
    ).toBe(false);
    expect(consoleLogSpy).not.toHaveBeenCalled();
  });
});
