import { Ability } from "./Ability.type";
import { Class } from "./Class.type";
import { DemiHumanClass } from "./DemiHumanClass.type";
import { PrimeRequisiteModifier } from "./PrimeRequisiteModifier.type";

/**
 * The Class or Demi-Human Class metadata in a form of: name, min requirements, PRM formulas. The PRM formulas are presented as an array where every memeber is a min required set of Ability Scores. Those members are in an OR relationship between each other.
 */
export type ClassConfigEntry<T extends Class | DemiHumanClass> = {
  name: T;
  requirements: Partial<Record<Ability, number>> | null;
  primeRequisite: Record<
    PrimeRequisiteModifier,
    Array<Partial<Record<Ability, number>>>
  >;
};
