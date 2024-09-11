import {
  Ability,
  Class,
  ClassConfigEntry,
  ClassesConfig,
  DemiHumanClass,
  Recommendations,
  ClassToPrimeRequisiteModifierMap,
  RollResult,
} from "../../types";
import { reduceToScores } from "../reduceToScores";
import { getPrimeRequisitesSorted } from "./getPrimeRequisitesSorted";
import { assignToPrimeRequisiteMap } from "./assignToPrimeRequisiteMap";
import { assignToUnavailableSet } from "./assignToUnavailableSet";
import { reduceToRecommendations } from "./reduceToRecommendations";

/**
 * Goes through every config class and compares its PRM formulas and requirements with the given Ability Scores, checking if it qualifies for the given class PRM tier and availability.
 * @param rolledAbilityScores a record of 6 roll results for every one of 6 abilities.
 * @param config a config containing metadata of all the Classes or Demi-Human Classes
 * @returns an object where 'best' are classes with +10% PRM, 'good' are classes with +5% and 'unavailable' are classes that don't meet requirements
 */
export const evaluateRecommendations = <T extends Class | DemiHumanClass>(
  rolledAbilityScores: Record<Ability, RollResult>,
  config: ClassesConfig<T>,
): Recommendations<T> => {
  const scores = reduceToScores(rolledAbilityScores);

  const classToPrimeRequisiteModifierMap: ClassToPrimeRequisiteModifierMap = {};
  const available: Array<T> = [];
  const unavailable: Array<T> = [];

  config.forEach((entry: ClassConfigEntry<T>) => {
    const isUnavailable = assignToUnavailableSet(scores, entry, unavailable);

    if (!isUnavailable) {
      getPrimeRequisitesSorted(entry).forEach(
        (
          primeRequisiteEntry: [
            string,
            Array<Partial<Record<Ability, number>>>,
          ],
        ) =>
          assignToPrimeRequisiteMap(
            primeRequisiteEntry,
            scores,
            entry.name,
            classToPrimeRequisiteModifierMap,
          ),
      );

      if (!classToPrimeRequisiteModifierMap[entry.name]) {
        available.push(entry.name);
      }
    }
  });

  return reduceToRecommendations(
    classToPrimeRequisiteModifierMap,
    available,
    unavailable,
  );
};
