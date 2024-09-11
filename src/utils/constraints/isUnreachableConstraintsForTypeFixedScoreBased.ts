import { Ability } from "../../types";
import { indent, red } from "../styles";

/**
 * In case a 'fixed'/'class'/'none' constraints would cause an infinite while loop, it returns true.
 * @param constraints a constraints of a selected type
 * @param racialModifiers a record of 6 racial modifiers for every one of 6 abilities (for non-racial method it's just 6 zeros).
 * @returns whether or not the constraints are impossible to satisfy
 */
export const isUnreachableConstraintsForTypeFixedScoreBased = (
  constraints: Record<Ability, number>,
  racialModifiers: Record<Ability, number>,
): boolean => {
  return Object.entries(racialModifiers).some(
    ([ability, modifier]: [string, number]) => {
      const requiredValue = constraints[ability as Ability];
      const isUnreachable = requiredValue - modifier > 18 && modifier !== 0;

      if (isUnreachable) {
        console.log(
          indent(
            red(
              `It's not possible to require minimum ${ability} of ${requiredValue} with a racial modifier of ${modifier}!\n`,
            ),
            2,
          ),
        );
      }

      return isUnreachable;
    },
  );
};
