import { Ability, Class, ClassConfigEntry, DemiHumanClass } from "../../types";

/**
 * Checks if any Ability Score is lower than the required for a given class.
 * @param entry an entry from either Class or Demi-Human class config
 * @param scores a dictionary of Ability Scores numeric values
 * @returns if any Ability Score is lower than the required for a given class, it returns true, otherwise and if the class has no requirements on the Scores, it returns false
 */
export const isUnavailable = <T extends Class | DemiHumanClass>(
  entry: ClassConfigEntry<T>,
  scores: Record<Ability, number>,
): boolean =>
  entry.requirements === null
    ? false
    : Object.entries(entry.requirements).some(
        ([ability, minRequiredScore]: [string, number]) =>
          scores[ability as Ability] < minRequiredScore,
      );
