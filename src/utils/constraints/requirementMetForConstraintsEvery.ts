import { Ability, ConstraintsThresholded, RollResult } from "../../types";

/**
 * Checks if every score with racial modifier on top of it is equal to or less to a threshold defined in the 'every' constraint. If the method is constrained but not racial, it checks for just the scores (or precisely: it has all racial modifiers as zeros).
 * @param rolledAbilityScores a record of 6 roll results for every one of 6 abilities.
 * @param constraints an object holding a `threshold`
 * @param racialModifiers a record of 6 racial modifiers for every one of 6 abilities (for non-racial method it's just 6 zeros).
 * @returns whether or not every score is equal or less to a threshold from `constraints` or not.
 */
export const requirementMetForConstraintsEvery = (
  rolledAbilityScores: Record<Ability, RollResult>,
  constraints: Pick<ConstraintsThresholded, "threshold">,
  racialModifiers: Record<Ability, number>,
): boolean => {
  let numberOfScoresBelowThreshold = 0;
  for (let key in rolledAbilityScores) {
    const ability = key as Ability;
    const [, , , score] = rolledAbilityScores[ability];

    if (score + racialModifiers[ability] <= constraints.threshold) {
      numberOfScoresBelowThreshold++;
    }
  }

  return numberOfScoresBelowThreshold !== 6;
};
