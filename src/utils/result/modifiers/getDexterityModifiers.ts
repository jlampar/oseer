import { Modifier } from "../../../types";
import { cyan } from "../../styles";
import { getNumericModifierDisplayValue } from "./../../getNumericModifierDisplayValue";

/**
 * Renders Dexterity modifiers for a given score value.
 * @param dexScore Dexterity score numeric value.
 * @returns Dexterity modifiers in a form of: `AC`, `Missile`, `Initiative`.
 */
export const getDexterityModifiers = (dexScore: number): Modifier => {
  let ac: number = 0;
  let missile: number = 0;
  let initiative: number = 0;

  if (dexScore === 3) {
    ac = -3;
    missile = -3;
    initiative = -2;
  } else if (dexScore <= 5) {
    ac = -2;
    missile = -2;
    initiative = -1;
  } else if (dexScore <= 8) {
    ac = -1;
    missile = -1;
    initiative = -1;
  } else if (dexScore <= 12) {
    return ["", []];
  } else if (dexScore <= 15) {
    ac = 1;
    missile = 1;
    initiative = 1;
  } else if (dexScore <= 17) {
    ac = 2;
    missile = 2;
    initiative = 1;
  } else if (dexScore === 18) {
    ac = 3;
    missile = 3;
    initiative = 2;
  }

  return [
    `AC: ${cyan("%s")}, Missile: ${cyan("%s")}, Initiative: ${cyan("%s")}`,
    [
      getNumericModifierDisplayValue(ac),
      getNumericModifierDisplayValue(missile),
      getNumericModifierDisplayValue(initiative),
    ],
  ];
};
