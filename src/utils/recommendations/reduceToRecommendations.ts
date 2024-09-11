import {
  Class,
  DemiHumanClass,
  PrimeRequisiteModifier,
  Recommendations,
  ClassToPrimeRequisiteModifierMap,
} from "../../types";

/**
 * Reduces the class-to-PrimeRequisiteModifier map and unavailable set to an object where 'best' are classes with +10% PRM, 'good' are classes with +5% and 'unavailable' is equal to unavailable set
 * @param classToPrimeRequisiteModifierMap class-to-PrimeRequisiteModifier map - a dictiornary where every class that classifies for +5%/+10% for given Ability Scores is assigned that exact modifier numeric value
 * @param unavailable a set of classes that are unavailable for given Ability Scores
 * @returns an object where 'best' are classes with +10% PRM, 'good' are classes with +5% and 'unavailable' are classes that don't meet requirements
 */
export const reduceToRecommendations = <T extends Class | DemiHumanClass>(
  classToPrimeRequisiteModifierMap: ClassToPrimeRequisiteModifierMap,
  available: Array<T>,
  unavailable: Array<T>,
) =>
  Object.entries(classToPrimeRequisiteModifierMap).reduce(
    (
      result: Recommendations<T>,
      [className, prm]: [string, PrimeRequisiteModifier],
    ) => {
      switch (prm) {
        case "10":
          result.best.push(className as T);
          break;
        case "5":
          result.good.push(className as T);
          break;
        default:
          break;
      }

      return result;
    },
    { best: [], good: [], available, unavailable },
  );
