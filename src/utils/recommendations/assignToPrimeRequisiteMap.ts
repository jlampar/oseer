import {
  Ability,
  Class,
  DemiHumanClass,
  PrimeRequisiteModifier,
  ClassToPrimeRequisiteModifierMap,
} from "../../types";
import { qualifiesForPrimeRequisite } from "./qualifiesForPrimeRequisite";

/**
 * If a given set of Ability Scores is sufficient for a inspected class to be qualified as meeting requirement of a positive PRM, it assigns it to the map if it was not assigned already (e.g. because of being assigned for a higher tier PRM).
 * @param primeRequisiteEntry Object.entry of a given class PRM formula from config; it consists of the modifier and the formula
 * @param scores a dictionary of Ability Scores numeric values
 * @param className a name of a inspected class
 * @param classToPrimeRequisiteModifierMap class-to-PrimeRequisiteModifier map - a dictiornary where every class that classifies for +5%/+10% for given Ability Scores is assigned that exact modifier numeric value
 */
export const assignToPrimeRequisiteMap = <T extends Class | DemiHumanClass>(
  primeRequisiteEntry: [string, Array<Partial<Record<Ability, number>>>],
  scores: Record<Ability, number>,
  className: T,
  classToPrimeRequisiteModifierMap: ClassToPrimeRequisiteModifierMap,
): void => {
  const [modifier, requirements] = primeRequisiteEntry;

  if (qualifiesForPrimeRequisite(requirements, scores)) {
    const value = classToPrimeRequisiteModifierMap[className];
    classToPrimeRequisiteModifierMap[className] =
      value || (modifier as PrimeRequisiteModifier);
  }
};
