import { Ability, RollResult } from "../types";
import { addRacialModifiers } from "./addRacialModifiers";

describe("addRacialModifiers", () => {
  it("should correctly apply racial modifiers to rolled scores", () => {
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

    const rolledAbilityScoresAdjusted = addRacialModifiers(
      rolledAbilityScores,
      racialModifiers,
    );

    expect(rolledAbilityScoresAdjusted.STR).toEqual([0, 0, 0, 15]);
    expect(rolledAbilityScoresAdjusted.DEX).toEqual([0, 0, 0, 8]);
    expect(rolledAbilityScoresAdjusted.CON).toEqual([0, 0, 0, 12]);
    expect(rolledAbilityScoresAdjusted.WIS).toEqual([0, 0, 0, 14]);
    expect(rolledAbilityScoresAdjusted.INT).toEqual([0, 0, 0, 10]);
    expect(rolledAbilityScoresAdjusted.CHA).toEqual([0, 0, 0, 16]);
  });

  it("should correctly apply racial modifiers to rolled scores when some modifiers would take particular scores below 3 or above 18", () => {
    const rolledAbilityScores: Record<Ability, RollResult> = {
      STR: [0, 0, 0, 13],
      DEX: [0, 0, 0, 10],
      CON: [0, 0, 0, 11],
      WIS: [0, 0, 0, 15],
      INT: [0, 0, 0, 4],
      CHA: [0, 0, 0, 16],
    };
    const racialModifiers: Record<Ability, number> = {
      STR: 2,
      DEX: -2,
      CON: 1,
      WIS: -1,
      INT: -2,
      CHA: 3,
    };

    const rolledAbilityScoresAdjusted = addRacialModifiers(
      rolledAbilityScores,
      racialModifiers,
    );

    expect(rolledAbilityScoresAdjusted.STR).toEqual([0, 0, 0, 15]);
    expect(rolledAbilityScoresAdjusted.DEX).toEqual([0, 0, 0, 8]);
    expect(rolledAbilityScoresAdjusted.CON).toEqual([0, 0, 0, 12]);
    expect(rolledAbilityScoresAdjusted.WIS).toEqual([0, 0, 0, 14]);
    expect(rolledAbilityScoresAdjusted.INT).toEqual([0, 0, 0, 3]);
    expect(rolledAbilityScoresAdjusted.CHA).toEqual([0, 0, 0, 18]);
  });
});
