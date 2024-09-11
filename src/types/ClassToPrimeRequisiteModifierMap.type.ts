import { PrimeRequisiteModifier } from "./PrimeRequisiteModifier.type";

/**
 * A map of class name to it's PRM modifier numeric value (for a given Ability Scores).
 */
export type ClassToPrimeRequisiteModifierMap = {
  [key: string]: PrimeRequisiteModifier;
};
