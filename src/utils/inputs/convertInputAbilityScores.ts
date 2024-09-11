import { ZERO_VALUES } from "./../const";
import { Ability } from "../../types";
import { getNormalizedScoreConstraint } from "./getNormalizedScoreConstraint";

/**
 * Reduces the inputted Ability Scores constraints so every entry is a valid score. If yes, it is as it is, if no - it becomes 0. A valid constraint is 100% numeric. Moreover if the inputted constraint is less than 3 or more than 18, it becomes 3 or 18 respectively.
 * @param input inputted constraints
 * @returns converted constraints
 */
export const convertInputAbilityScores = (
  input: Record<Ability, string>,
): Record<Ability, number> =>
  Object.entries(input).reduce<Record<Ability, number>>(
    (newScores: Record<Ability, number>, [ability, score]: [string, string]) =>
      Object.assign(newScores, {
        ...newScores,
        [ability as Ability]: getNormalizedScoreConstraint(score),
      }),
    { ...ZERO_VALUES },
  );
