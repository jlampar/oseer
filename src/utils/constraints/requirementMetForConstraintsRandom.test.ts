import { Ability, ConstraintsThresholded, RollResult } from "../../types";
import { requirementMetForConstraintsRandom } from "./requirementMetForConstraintsRandom";

describe("requirementMetForConstraintsRandom", () => {
  const rolledAbilityScores: Record<Ability, RollResult> = {
    STR: [0, 0, 0, 13],
    DEX: [0, 0, 0, 10],
    CON: [0, 0, 0, 11],
    WIS: [0, 0, 0, 15],
    INT: [0, 0, 0, 10],
    CHA: [0, 0, 0, 16],
  };
  const racialModifiers: Record<Ability, number> = {
    STR: 2,
    DEX: -2,
    CON: 1,
    WIS: -1,
    INT: 0,
    CHA: 0,
  };

  it("should pass for any scores when there are no requirements", () => {
    const constraints: ConstraintsThresholded = {
      numberOfScores: 0,
      threshold: 0,
    };

    const result = requirementMetForConstraintsRandom(
      rolledAbilityScores,
      constraints,
      racialModifiers,
    );

    expect(result).toEqual(true);
  });

  it("should pass for a given scores when the requirements are met", () => {
    const constraints: ConstraintsThresholded = {
      numberOfScores: 2,
      threshold: 10,
    };

    const result = requirementMetForConstraintsRandom(
      rolledAbilityScores,
      constraints,
      racialModifiers,
    );

    expect(result).toEqual(true);
  });

  it("should not pass for scores when there are requirements and they are not met", () => {
    const constraints: ConstraintsThresholded = {
      numberOfScores: 4,
      threshold: 13,
    };

    const result = requirementMetForConstraintsRandom(
      rolledAbilityScores,
      constraints,
      racialModifiers,
    );

    expect(result).toEqual(false);
  });
});
