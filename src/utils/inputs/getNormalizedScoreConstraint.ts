import { isPositiveNumber } from "./isPositiveNumber";

/**
 * Normalizes the inputted string Ability Score based constraint and returns it's numeric representation in a correct range (0 and 3-18; 0 means 'no constraint').
 * @param score the Ability Score input value.
 * @returns normalized Ability Score numeric value
 */
export const getNormalizedScoreConstraint = (score: string): number => {
  if (!isPositiveNumber(score)) {
    return 0;
  } else if (+score !== 0 && +score < 3) {
    return 3;
  } else if (+score > 18) {
    return 18;
  }

  return +score;
};
