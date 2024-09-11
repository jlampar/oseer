import { Class, DemiHumanClass, Ability, ClassConfigEntry } from "../../types";
import { isUnavailable } from "./isUnavailable";

/**
 * Assigns the inspected class to the unavailable set if it is not allowed and - as a side-effect - returns `true` or `false` depending if it happened.
 * @param scores a dictionary of Ability Scores numeric values
 * @param entry an entry from either Class or Demi-Human class config
 * @param unavailable a set of classes that are unavailable for given Ability Scores
 * @returns `true` if the class in question is unavailable, otherwise `false`
 */
export const assignToUnavailableSet = <T extends Class | DemiHumanClass>(
  scores: Record<Ability, number>,
  entry: ClassConfigEntry<T>,
  unavailable: Array<T>,
): boolean => {
  const notAllowed = isUnavailable(entry, scores);

  if (notAllowed) {
    unavailable.push(entry.name);
  }

  return notAllowed;
};
