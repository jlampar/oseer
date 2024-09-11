import { RollResult } from "../types";
import { randomInRange } from "./randomInRange";

/**
 * Rolls 3d6 dices - generates 3 random numbers in 1-6 range and their sum.
 * @returns roll result in a form of: values of dices that were rolled and their numeric sum.
 */
export const roll = (): RollResult => {
  const diceOne = randomInRange(1, 6);
  const diceTwo = randomInRange(1, 6);
  const diceThree = randomInRange(1, 6);
  const sum = diceOne + diceTwo + diceThree;

  return [diceOne, diceTwo, diceThree, sum];
};
