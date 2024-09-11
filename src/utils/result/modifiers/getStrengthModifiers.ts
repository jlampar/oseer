import { Modifier } from "../../../types";
import { cyan } from "../../styles";
import { getNumericModifierDisplayValue } from "./../../getNumericModifierDisplayValue";

/**
 * Renders Strength modifiers for a given score value.
 * @param strScore Strength score numeric value.
 * @returns Strength modifiers in a form of: `Melee`, `Open Doors`.
 */
export const getStrengthModifiers = (strScore: number): Modifier => {
  let melee: number = 0;
  let openDoors: number = 1;

  if (strScore === 3) {
    melee = -3;
  } else if (strScore <= 5) {
    melee = -2;
  } else if (strScore <= 8) {
    melee = -1;
  } else if (strScore <= 12) {
    melee = 0;
    openDoors = 2;
  } else if (strScore <= 15) {
    melee = 1;
    openDoors = 3;
  } else if (strScore <= 17) {
    melee = 2;
    openDoors = 4;
  } else if (strScore === 18) {
    melee = 3;
    openDoors = 5;
  }

  const meleePart = melee ? `Melee: ${cyan("%s")}, ` : "";
  const inputs = [`${openDoors}-in-6`];
  if (melee) {
    inputs.unshift(getNumericModifierDisplayValue(melee));
  }

  return [`${meleePart}Open Doors: ${cyan("%s")}`, inputs];
};
