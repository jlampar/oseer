import { Ability, ConstraintsThresholded } from "../../types";
import { indent, red } from "../styles";

/**
 * In case an 'every' constraints would cause an infinite while loop, it returns true.
 * @param constraints a constraints of a selected type
 * @param racialModifiers a record of 6 racial modifiers for every one of 6 abilities (for non-racial method it's just 6 zeros).
 * @returns whether or not the constraints are impossible to satisfy
 */
export const isUnreachableConstraintsForTypeEvery = (
  constraints: Pick<ConstraintsThresholded, "threshold">,
  racialModifiers: Record<Ability, number>,
): boolean => {
  const { threshold } = constraints;

  if (
    Object.values(racialModifiers).every(
      (modifier) => threshold - modifier >= 18,
    )
  ) {
    console.log(
      indent(
        red(
          "Every score adjusted by the applicable modifier is below threshold!\n",
        ),
        2,
      ),
    );

    return true;
  }

  return false;
};
