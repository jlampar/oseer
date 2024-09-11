import { ZERO_VALUES } from "./const/ZERO_VALUES";
import { Ability, RollResult } from "../types";

/**
 * Strips down the more complex RollResult form of a score to its numeric representation.
 * @param rolledAbilityScores a record of 6 roll results for every one of 6 abilities.
 * @returns a record of 6 numeric scores for every one of 6 abilities.
 */
export const reduceToScores = (
  rolledAbilityScores: Record<Ability, RollResult>,
): Record<Ability, number> =>
  Object.entries(rolledAbilityScores).reduce<Record<Ability, number>>(
    (
      reduced: Record<Ability, number>,
      [ability, [, , , score]]: [string, RollResult],
    ) => Object.assign(reduced, { ...reduced, [ability as Ability]: score }),
    { ...ZERO_VALUES },
  );
