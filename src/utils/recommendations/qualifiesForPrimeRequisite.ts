import { Ability } from "../../types";

/**
 * Compares the Ability Scores with the requirements of a given class; the requirements for a PRM are in a form of an arry of Ability-to-value dictionaries - it checks for at least one array element that meets the requirement for every score (so the relation between an array elements is OR and between Ability-to-value dictionary elements is AND).
 * @param requirements an array of objects where every object is a dictionary in a form of Ability-to-value
 * @param scores a dictionary of Ability Scores numeric values
 * @returns true if the qualification for the given Ability Scores is met, otherwise false
 */
export const qualifiesForPrimeRequisite = (
  requirements: Array<Partial<Record<Ability, number>>>,
  scores: Record<Ability, number>,
): boolean =>
  requirements.some(
    (minRequiredAbilityScores: Partial<Record<Ability, number>>) =>
      Object.entries(minRequiredAbilityScores).every(
        ([ability, minRequiredScore]: [string, number]) =>
          scores[ability as Ability] >= minRequiredScore,
      ),
  );
