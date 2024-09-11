import { Ability, RollResult } from "../types";
import { reduceToScores } from "./reduceToScores";

describe("reduceToScores", () => {
  it("should correctly reduce complex form of RollResult dictionary to simple scores dictionary", () => {
    const rolledAbilityScores: Record<Ability, RollResult> = {
      STR: [0, 0, 0, 13],
      DEX: [0, 0, 0, 8],
      CON: [0, 0, 0, 12],
      WIS: [0, 0, 0, 18],
      INT: [0, 0, 0, 10],
      CHA: [0, 0, 0, 14],
    };

    const reduced = reduceToScores(rolledAbilityScores);

    expect(reduced.STR).toEqual(13);
    expect(reduced.DEX).toEqual(8);
    expect(reduced.CON).toEqual(12);
    expect(reduced.WIS).toEqual(18);
    expect(reduced.INT).toEqual(10);
    expect(reduced.CHA).toEqual(14);
  });
});
