import { Class } from "./Class.type";
import { DemiHumanClass } from "./DemiHumanClass.type";

/**
 * A map representing a reduced recommendations in a form of an object where 'best' are classes with +10% PRM, 'good' are classes with +5%, 'available' is all the rest except for the 'unavailable' which are classes that don't meet requirements. The values of a map are arrays of Classes or Demi-Human Classes names.
 */
export type Recommendations<T extends Class | DemiHumanClass> = Record<
  "best" | "good" | "available" | "unavailable",
  Array<T>
>;
