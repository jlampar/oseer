import { Modifier } from "../../../types";
import { cyan } from "../../styles";
import { getNumericModifierDisplayValue } from "./../../getNumericModifierDisplayValue";

/**
 * Renders Constitution modifiers for a given score value.
 * @param conScore Constitution score numeric value.
 * @returns Constitution modifiers in a form of: `Hit Points`.
 */
export const getConstitutionModifiers = (conScore: number): Modifier => {
  let hitPoints: number = 0;

  if (conScore === 3) {
    hitPoints = -3;
  } else if (conScore <= 5) {
    hitPoints = -2;
  } else if (conScore <= 8) {
    hitPoints = -1;
  } else if (conScore <= 12) {
    return ["", []];
  } else if (conScore <= 15) {
    hitPoints = 1;
  } else if (conScore <= 17) {
    hitPoints = 2;
  } else if (conScore === 18) {
    hitPoints = 3;
  }

  return [
    `Hit Points: ${cyan("%s")}`,
    [getNumericModifierDisplayValue(hitPoints)],
  ];
};
