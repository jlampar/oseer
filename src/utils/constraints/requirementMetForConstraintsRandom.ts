import { Ability, ConstraintsThresholded, RollResult } from "../../types";

/**
 * Checks if scores with racial modifiers on top of them have at least a number of scores higher or equal to a threshold defined in the 'random' constraint. If the method is constrained but not racial, it checks for just the scores (or precisely: it has all racial modifiers as zeros).
 * @param rolledAbilityScores a record of 6 roll results for every one of 6 abilities.
 * @param constraints an object holding the amount of random scores equal to `numberOfScores` that should be higher or equal to a `threshold`
 * @param racialModifiers a record of 6 racial modifiers for every one of 6 abilities (for non-racial method it's just 6 zeros).
 * @returns whether or not a required minimal number scores higher than the threshold from `constraints` is met or not.
 */
export const requirementMetForConstraintsRandom = (
  rolledAbilityScores: Record<Ability, RollResult>,
  constraints: ConstraintsThresholded,
  racialModifiers: Record<Ability, number>,
): boolean => {
  const { numberOfScores, threshold } = constraints;
  let scoresHigherThanThreshold = 0;

  for (let key in rolledAbilityScores) {
    const ability = key as Ability;
    const [, , , score] = rolledAbilityScores[ability];

    if (score + racialModifiers[ability] >= Number(threshold)) {
      scoresHigherThanThreshold++;
    }
  }

  return scoresHigherThanThreshold >= Number(numberOfScores);
};
