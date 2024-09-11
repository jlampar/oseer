import { Ability, RollResult } from "../types";
import { roll } from "./roll";

/**
 * Rolls all 6 Ability Scores 3d6 DTL.
 * @returns a record of 6 roll results for every one of 6 abilities
 */
export const rollAbilityScores = (): Record<Ability, RollResult> => ({
  STR: roll(),
  DEX: roll(),
  CON: roll(),
  WIS: roll(),
  INT: roll(),
  CHA: roll(),
});
