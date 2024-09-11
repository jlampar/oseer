import { Class } from "./Class.type";
import { ClassConfigEntry } from "./ClassConfigEntry.type";
import { DemiHumanClass } from "./DemiHumanClass.type";

/**
 * An array of Class or Demi-Human Class metadata entries.
 */
export type ClassesConfig<T extends Class | DemiHumanClass> = Array<
  ClassConfigEntry<T>
>;
