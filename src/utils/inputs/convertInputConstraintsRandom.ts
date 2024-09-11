import { ConstraintsThresholded } from "../../types";
import { getNormalizedScoreConstraint } from "./getNormalizedScoreConstraint";
import { isPositiveNumber } from "./isPositiveNumber";

const getNormalizedNumberOfScores = (inputNumberOfScores: string) => {
  if (!isPositiveNumber(inputNumberOfScores) || +inputNumberOfScores < 0) {
    return 0;
  } else if (+inputNumberOfScores > 6) {
    return 6;
  }

  return +inputNumberOfScores;
};

/**
 * Converts the inputted 'random' constraints, changing them to numeric and adjusting in case the values are off-limits.
 * @param input inputted constraints
 * @returns converted 'random' constraints
 */
export const convertInputConstraintsRandom = (
  input: Record<string, string>,
): ConstraintsThresholded => ({
  numberOfScores: getNormalizedNumberOfScores(input.numberOfScores),
  threshold: getNormalizedScoreConstraint(input.threshold),
});
