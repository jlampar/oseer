import { Modifier } from "../../../types";
import { cyan } from "../../styles";
import { getNumericModifierDisplayValue } from "./../../getNumericModifierDisplayValue";

/**
 * Renders Wisdom modifiers for a given score value.
 * @param wisScore Wisdom score numeric value.
 * @returns Wisdom modifiers in a form of: `Magic Saves`.
 */
export const getWisdomModifiers = (wisScore: number): Modifier => {
  let magicSaves: number = 0;

  if (wisScore === 3) {
    magicSaves = -3;
  } else if (wisScore <= 5) {
    magicSaves = -2;
  } else if (wisScore <= 8) {
    magicSaves = -1;
  } else if (wisScore <= 12) {
    return ["", []];
  } else if (wisScore <= 15) {
    magicSaves = 1;
  } else if (wisScore <= 17) {
    magicSaves = 2;
  } else if (wisScore === 18) {
    magicSaves = 3;
  }

  return [
    `Magic Saves: ${cyan("%s")}`,
    [getNumericModifierDisplayValue(magicSaves)],
  ];
};
