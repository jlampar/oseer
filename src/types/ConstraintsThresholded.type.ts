/**
 * Constraint type that requires pointing how many scores should have relation to a particular treshold. In case of 'random' constraints, the number of scores must be above it or equal to it, in case of the 'every', the type is used as `Pick<ConstraintsThresholded, 'threshold'>` and constraints every roll, forcing the set to be re-rolled when the whole set is below the threshold.
 */
export type ConstraintsThresholded = {
  numberOfScores: number;
  threshold: number;
};
