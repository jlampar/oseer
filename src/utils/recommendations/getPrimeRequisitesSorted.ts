import { Ability, Class, ClassConfigEntry, DemiHumanClass } from "../../types";

/**
 * As Object.entries(entry.primeRequisite) are returned in random order and the `assignToPrimeRequisiteMap` relies on the assumption that a class qualifying for a higher PRM is already in the class-to-PrimeRequisiteModifier map, we must be sure that they are sorted so the algorithm encounters the higher formulas first
 * @param entry PRM formulas from either Class or Demi-Human class config
 * @returns PRM formulas from either Class or Demi-Human class config sorted
 */
export const getPrimeRequisitesSorted = <T extends Class | DemiHumanClass>(
  entry: ClassConfigEntry<T>,
): Array<[string, Array<Partial<Record<Ability, number>>>]> =>
  Object.entries(entry.primeRequisite).sort(
    (
      [a]: [string, Array<Partial<Record<Ability, number>>>],
      [b]: [string, Array<Partial<Record<Ability, number>>>],
    ) => Number(b) - Number(a),
  );
