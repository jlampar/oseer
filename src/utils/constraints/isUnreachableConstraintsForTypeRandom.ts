import { Ability, ConstraintsThresholded } from "../../types";
import { indent, red } from "../styles";

/**
 * In case a 'random' constraints would cause an infinite while loop, it returns true.
 * @param constraints a constraints of a selected type
 * @param racialModifiers a record of 6 racial modifiers for every one of 6 abilities (for non-racial method it's just 6 zeros).
 * @returns whether or not the constraints are impossible to satisfy
 */
export const isUnreachableConstraintsForTypeRandom = (
  constraints: ConstraintsThresholded,
  racialModifiers: Record<Ability, number>,
): boolean => {
  const { numberOfScores, threshold } = constraints;

  const unreachableScores = Object.values(racialModifiers).reduce(
    (acc, modifier) => {
      if (threshold - modifier > 18) {
        acc++;
      }

      return acc;
    },
    0,
  );

  if (6 - unreachableScores < numberOfScores) {
    console.log(
      indent(
        red(
          "Too many scores adjusted by the applicable modifiers are too low to reach the treshold!\n",
        ),
        2,
      ),
    );

    return true;
  }

  return false;
};
