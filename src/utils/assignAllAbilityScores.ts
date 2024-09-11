import { Ability, RollResult } from "../types";
import { getRollResult } from "./getRollResult";

/**
 * Accepts a prompt input record of 6 values for every one of 6 abilities and assigns the non-random roll results for every ability.
 * @param inputAbilityScores a record of 6 values for every one of 6 abilities
 */
export const assignAllAbilityScores = (
  inputAbilityScores: Record<Ability, number>,
): Record<Ability, RollResult> => ({
  STR: getRollResult(inputAbilityScores.STR),
  DEX: getRollResult(inputAbilityScores.DEX),
  CON: getRollResult(inputAbilityScores.CON),
  WIS: getRollResult(inputAbilityScores.WIS),
  INT: getRollResult(inputAbilityScores.INT),
  CHA: getRollResult(inputAbilityScores.CHA),
});
