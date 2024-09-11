import { Ability } from "../../types";

/**
 * Zero-value object for every Ability (used to provide non-inputted or initial values for both scores, modifiers and some constraints).
 */
export const ZERO_VALUES: Record<Ability, number> = {
  STR: 0,
  DEX: 0,
  CON: 0,
  WIS: 0,
  INT: 0,
  CHA: 0,
};
