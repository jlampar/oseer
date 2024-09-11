/**
 * Based on the Prime Requisite Modifier table, it assigns the proper PRM for the given score value. This is used for displaying it in the results table, the output of this function is not used for the recommendations step.
 * @param score a numeric value of the tested score.
 * @returns Prime Requisite Modifier value for a given score.
 */
export const getPrimeRequisiteModifier = (score: number): number => {
  if (score >= 3 && score <= 5) {
    return -20;
  } else if (score >= 6 && score <= 8) {
    return -10;
  } else if (score >= 13 && score <= 15) {
    return 5;
  } else if (score >= 16 && score <= 18) {
    return 10;
  }

  return 0;
};
