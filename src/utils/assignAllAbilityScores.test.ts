import { Ability } from "../types";
import { assignAllAbilityScores } from "./assignAllAbilityScores";

describe("assignAllAbilityScores", () => {
  it("should assign fixed roll results for the given input", () => {
    const inputAbilityScores: Record<Ability, number> = {
      STR: 13,
      DEX: 10,
      CON: 11,
      WIS: 15,
      INT: 10,
      CHA: 16,
    };

    const result = assignAllAbilityScores(inputAbilityScores);

    expect(result).toStrictEqual({
      STR: [0, 0, 0, 13],
      DEX: [0, 0, 0, 10],
      CON: [0, 0, 0, 11],
      WIS: [0, 0, 0, 15],
      INT: [0, 0, 0, 10],
      CHA: [0, 0, 0, 16],
    });
  });
});
