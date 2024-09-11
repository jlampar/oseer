import { ConstraintsThresholded } from "../../types";
import { getNormalizedScoreConstraint } from "./getNormalizedScoreConstraint";

/**
 * Converts the inputted 'every' constraints, changing them to numeric and adjusting in case the values are off-limits.
 * @param input inputted constraints
 * @returns converted 'every' constraints
 */
export const convertInputConstraintsEvery = (
  input: Record<string, string>,
): Pick<ConstraintsThresholded, "threshold"> => ({
  threshold: getNormalizedScoreConstraint(input.threshold),
});
