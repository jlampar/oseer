import { RollResult } from "../types";

/**
 * Processes the inputted score to the form consumable by the result printer.
 * @param score the Ability Score numeric value.
 * @returns roll result in a form of: values of dices that were rolled and their numeric sum.
 */
export const getRollResult = (score: number): RollResult => [0, 0, 0, score];
