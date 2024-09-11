import { isPositiveNumber } from "./isPositiveNumber";

/**
 * Normalizes the inputted string Ability Score and returns it's numeric representation in a correct range (3-18).
 * @param score the Ability Score input value.
 * @returns normalized Ability Score numeric value
 */
export const getNormalizedScore = (score: string): number => {
  if (!isPositiveNumber(score) || +score < 3) {
    return 3;
  } else if (+score > 18) {
    return 18;
  }

  return +score;
};
