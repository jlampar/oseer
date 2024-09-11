import { Ability, RollResult } from "../../types";

/**
 * Checks if scores with racial modifiers on top of them meet the minimal values required for the constrained 'fixed'/'class'/'none' method to pass. If the method is constrained but not racial, it checks for just the scores (or precisely: it has all racial modifiers as zeros).
 * @param rolledAbilityScores a record of 6 roll results for every one of 6 abilities.
 * @param constraints a record of 6 constraints for every one of 6 abilities (0 means no constraint).
 * @param racialModifiers a record of 6 racial modifiers for every one of 6 abilities (for non-racial method it's just 6 zeros).
 * @returns whether or not a required minimal scores from `constraints` are met or not.
 */
export const requirementMetForConstraintsFixedScoreBased = (
  rolledAbilityScores: Record<Ability, RollResult>,
  constraints: Record<Ability, number>,
  racialModifiers: Record<Ability, number>,
): boolean => {
  for (let key in rolledAbilityScores) {
    const ability = key as Ability;
    const [, , , score] = rolledAbilityScores[ability];

    if (score + racialModifiers[ability] < constraints[ability]) {
      return false;
    }
  }

  return true;
};
